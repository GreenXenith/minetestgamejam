# Minetest GAME JAM 2023
Planning Document

## Table of Contents
 - [Schedule](#schedule)
 - [Theme](#theme)
 - [Rules](#rules)
   - [Submissions](#submissions)
 - [Scoring](#scoring)
   - [Tie Breaking](#tie-breaking)
 - [Prizes](#prizes)
   - [Fund Management](#fund-management)
   - [Disclaimer](#disclaimer)
 - [Results](#results)
 - [Promotion](#promotion)
 - [Data Repository](#data-repository)
 - [Jam Management](#jam-management)

## Schedule
_All times are UTC_
* November: Promotion
* Friday,    01 December @00:00: Theme announced, development begins
* Thursday,  21 December @23:59: Development ends, rating begins
* Thursday,  28 December @23:59: Rating ends
* Saturday,  30 December @??:??: Tallying and results

## Theme
The 2023 jam theme will be announced when the jam begins.   

## Rules
* Games must comply with [ContentDB policies](https://content.minetest.net/policy_and_guidance/)
* Third-party libraries and assets may be used, but gameplay must be original work
  * AI-generated assets may be used, if thoroughly documented and properly licensed
* Games must be completed within allotted window of time
* Submissions may be authored by any amount of participants (participant names must be included in the `Maintainers` ContentDB field)
* Participants may have multiple submissions (this is discouraged)

### Submissions
* Games shall be uploaded to the [Minetest Content Database](https://content.minetest.net/)
* Packages must be tagged using `Jam / Game 2023`
* Packages may be approved as soon as elligible (scoring is locked until after development period)
* Games must use the `gamename_modname` prefix-style for non-library\* mod naming (good practice and proposed policy)

\* Libraries must follow the [Right to a Name policy](https://content.minetest.net/policy_and_guidance/#31-right-to-a-name). Git submodules recommended.  

## Scoring
Scoring will be performed exclusively by the community\*\*.  

Using an interface on https://jam.minetest.net/, reviewers will sort a randomized list of all submissions (reviewers will log in via ContentDB OAuth). Reviewers may sort however they like, though a list of recommended considerations is provided. Reviewers cannot rank their own submission.  

The placement for each package determines points it recieves (from 1 to \<total submissions>). Points recieved from reviewers with more than **10 helpful review points** recieved on ContentDB (or have `Editor` rank or higher) will be increased by 10% (point threshold and bonus are subject to change). The final score (additive, +penalties) determines final ranking.  

| Consider | |
| - | - |
| Gameplay   | How intuitive and enjoyable is the gameplay? Is it a fulfilling experience? Is there a clear goal? |
| Innovation | What makes the game unique? Does it have emergent mechanics or clever gameplay? |
| Content    | Is the game well-polished or packed with stuff to do? Is the art and sound consistent and cohesive? |
| Theme      | How well does the game utilize the theme(s)? Did it apply the theme(s) in a clever way? |

| Penalties | Reduces final score by 20% each (additive) |
| - | - |
| `Complex Installation` tag | Game should not require external libraries or mod trust. |
| No git repository | Game should use proper source control. |
| Non-free media or license | Game should use completely free assets and licenses. |

### Tie Breaking
Packages with identical scores will be ranked according to the following (in order until determined):
* Average placement from helpful reviewers
* Number of penalties (less is better)
* Package ID (time submitted)

## Prizes
The total prize payout for the 2023 jam is $300. Winners will recieve one half ($150), one third ($100), and one sixth ($50) of the prize pool for 1st, 2nd, and 3rd places, respectively. Winners also receive ContentDB front page promotion.  
  
Other prizes TBD.  

### Fund Management
The 2023 prize pool is funded by community and jam management contributions. The prize pool is held and managed through _PayPal_ by _GreenXenith_.  

\*\* Submissions from _GreenXenith_ are non-competing.

**Paypal is required to receive funds.** This _is_ negotiable at payout, but entirely at the discretion of the handler. Payouts will be divided evenly for team winners. Remainders from uneven divisions will go to the [Minetest Project](https://www.minetest.net/get-involved/#donate).  

### Disclaimer
By participating and/or contributing, you understand and accept that all involved funds will be aggregated and distributed by a private third-party (_GreenXenith_) through a proprietary third-party service (_PayPal_) to you (_the contestant_) or the recipient of your choice, at the complete discretion of the private handler (_GreenXenith_).  

## Results
Full results will be made public in the [data repository](#data-repository). Each package will include the following:
* Average ranking
* Total points recieved
* Average helpful reviewer ranking
* Penalties
* Final placement

## Promotion
All jam information will be hosted on https://jam.minetest.net/. All community platforms will have information relayed to them on a regular basis where possible.  
The Minetest Content Database acts as the central submission platform. https://jam.minetest.net/ acts as the central information and reviewing platform.  

## Data Repository
The [data repository](https://github.com/GreenXenith/minetestgamejam) holds all public data for the game jam. This includes (but is not limited to):
* Planning documents
* Distributed info/flyers
* Jam results
* Event statistics

## Jam Management
The Minetest Game Jam is organized and operated by GreenXenith, with the input and assistance of various community members, including (but not limited to): ExeVirus, MisterE, rubenwardy and Warr1024.  

[Back to Top](#)
