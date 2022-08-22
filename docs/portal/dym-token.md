# DYM token

** Purpose of the DYM Token **

dYmension implements a shared security model that strengthens as more applications are deployed. A special transaction is executed in the dYmension settlement hub to facilitate the creation of a new RollApp and to become a Sequencer. Becoming a Sequencer requires a stake of DYM tokens and delegation to a validator of dYmension’s settlement layer.

The delegation of tokens to a validator node on dYmension's settlement layer increases the portion of staked tokens and overall security of the network. Unlike standard delegation procedures Sequencers do not receive staking rewards in DYM token, they receive the allocated amount of RollApp token network fees for processing transactions.

In order to participate as a Sequencer a minimum amount of staked DYM tokens is required. The protocol sets the minimum as an equilibrium between preventing attempts at fraud and keeping the barrier-of-entry relatively low for developers. In optimistic design, the EV (Expected Value) of attempting fraud is always negative because no amount of money can guarantee that your attack will be successful. As such, the amount of slashable stake that needs to be bonded by the Sequencer only needs to be high enough to prevent attempts at fraud.

If there is more than one Sequencer in a rotation for a specific RollApp, the leader election (the mechanism determining the active Sequencer) is based on weighted amount of DYM tokens staked, which increases the demand for DYM as Sequencers compete over their position in the rotation. Permission-less access for application sequencing creates an organic market for actors that are able to achieve the greatest amount of profit for their period. In effect, RollApps with permission-less Sequencers accrue a portion of the application layer MEV to DYM as there is a direct correlation between the amount of Sequencer staked DYM and Sequencer MEV extraction.

As more RollApps are deployed, a flywheel effect is ignited due to the demand for DYM as a network fee to facilitate state publication, RollApp token swaps, IRC and IBC transactions and the staking requirements for being a Sequencer. More information about the distribution, issurance rates and eligiblity for airdrops will be released in the future.
