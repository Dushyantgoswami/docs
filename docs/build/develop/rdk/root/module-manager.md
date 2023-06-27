---
title: Module manager
slug: modular-manager
---

The module manager of the application is responsible for calling the InitGenesis method of each of the application's modules in order. This order is set by the application developer via the manager's SetOrderGenesisMethod, which is called in the application's constructor function. Application module interfaces exist to facilitate the composition of modules together to form a functional Cosmos SDK application.

-   AppModuleBasic for independent module functionalities.
-   AppModule for inter-dependent module functionalities (except genesis-related functionalities).

```Go
var (
	_ module.AppModule      = AppModule{}
	_ module.AppModuleBasic = AppModuleBasic{}
)
```

```Go
//------------------------------------------------------------------------------
// AppModuleBasic
//------------------------------------------------------------------------------

// AppModuleBasic defines the basic application module used by the module
type AppModuleBasic struct{}

func (AppModuleBasic) Name() string {
	return types.ModuleName
}

func (AppModuleBasic) RegisterInterfaces(registry codectypes.InterfaceRegistry) {
	types.RegisterInterfaces(registry)
}

func (AppModuleBasic) DefaultGenesis(cdc codec.JSONCodec) json.RawMessage {
	return cdc.MustMarshalJSON(types.DefaultGenesisState())
}

func (AppModuleBasic) ValidateGenesis(cdc codec.JSONCodec, _ client.TxEncodingConfig, bz json.RawMessage) error {
	var gs types.GenesisState
	if err := cdc.UnmarshalJSON(bz, &gs); err != nil {
		return fmt.Errorf("failed to unmarshal %s genesis state: %w", types.ModuleName, err)
	}

	return gs.Validate()
}

func (AppModuleBasic) RegisterGRPCGatewayRoutes(clientCtx client.Context, mux *runtime.ServeMux) {
	if err := types.RegisterQueryHandlerClient(context.Background(), mux, types.NewQueryClient(clientCtx)); err != nil {
		panic(err)
	}
}

func (AppModuleBasic) GetTxCmd() *cobra.Command {
	return cli.GetTxCmd()
}

func (AppModuleBasic) GetQueryCmd() *cobra.Command {
	return nil
}
```

```Go
//------------------------------------------------------------------------------
// AppModule
//------------------------------------------------------------------------------

// AppModule implements an application module for the envoy module
type AppModule struct {
	AppModuleBasic

	keeper keeper.Keeper
}

// NewAppModule creates a new AppModule object
func NewAppModule(keeper keeper.Keeper) AppModule {
	return AppModule{AppModuleBasic{}, keeper}
}

func (am AppModule) RegisterInvariants(_ sdk.InvariantRegistry) {
}

func (am AppModule) RegisterServices(cfg module.Configurator) {
	types.RegisterMsgServer(cfg.MsgServer(), keeper.NewMsgServerImpl(am.keeper))
	// types.RegisterQueryServer(cfg.QueryServer(), keeper.NewQueryServerImpl(am.keeper))
}

func (AppModule) ConsensusVersion() uint64 {
	return 1
}

func (am AppModule) BeginBlock(_ sdk.Context, _ abci.RequestBeginBlock) {
}

func (AppModule) EndBlock(_ sdk.Context, _ abci.RequestEndBlock) []abci.ValidatorUpdate {
	return []abci.ValidatorUpdate{}
}

func (am AppModule) InitGenesis(ctx sdk.Context, cdc codec.JSONCodec, data json.RawMessage) []abci.ValidatorUpdate {
	var genesisState types.GenesisState
	cdc.MustUnmarshalJSON(data, &genesisState)

	am.keeper.InitGenesis(ctx, &genesisState)

	return []abci.ValidatorUpdate{}
}

func (am AppModule) ExportGenesis(ctx sdk.Context, cdc codec.JSONCodec) json.RawMessage {
	gs := am.keeper.ExportGenesis(ctx)
	return cdc.MustMarshalJSON(gs)
}
```

```Go
//------------------------------------------------------------------------------
// Deprecated stuff
//------------------------------------------------------------------------------

// deprecated
func (AppModuleBasic) RegisterLegacyAminoCodec(_ *codec.LegacyAmino) {
}

// deprecated
func (AppModuleBasic) RegisterRESTRoutes(_ client.Context, _ *mux.Router) {
}

// deprecated
func (AppModule) Route() sdk.Route {
	return sdk.Route{}
}

// deprecated
func (AppModule) QuerierRoute() string {
	return types.QuerierRoute
}

// deprecated
func (AppModule) LegacyQuerierHandler(*codec.LegacyAmino) sdk.Querier {
	return nil
}
```
