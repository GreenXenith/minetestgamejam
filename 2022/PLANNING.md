# Minetest GAME JAM 2022
Planning Document

## Table of Contents
 - [Schedule](#schedule)
 - [Theme](#theme)
 - [Rules](#rules)
   - [Submissions](#submissions)
 - [Scoring](#scoring)
   - [Judge Scoring](#judge-scoring)
   - ["Bonuses"](#bonuses)
   - [Community Voting](#community-voting)
   - [Rubrics](#rubrics)
     - [Judge Rubric](#judge-rubric)
     - [Bonus Rubric](#bonus-rubric)
   - [Tie Breaking](#tie-breaking)
 - [Prizes](#prizes)
   - [Pool and Payout](#pool-and-payout)
   - [Disclaimer](#disclaimer)
 - [Results](#results)
 - [Judges](#judges)
   - [Current Judges](#current-judges)
   - [Judge Participation](#judge-participation)
 - [Promotion](#promotion)
 - [Data Repository](#data-repository)
 - [Jam Management](#jam-management)

## Schedule
_All times are UTC_
* Pre-November: Promotion
* Tuesday,   01 November @00:00: Themes announced, development begins
* Monday,    21 November @23:59: Development ends, rating begins
* Monday,    28 November @23:59: Rating ends
* Wednesday, 30 November @??:??: Tallying and results

## Theme
The 2022 jam will use a 3-word theme system. These will be announced when the jam begins.   

Theme: ???, ???, ???  

## Rules
* Games must be completed within allotted window of time
* Third-party libraries and assets may be used, but gameplay must be original work
* Games must comply with [ContentDB policies](https://content.minetest.net/policy_and_guidance/)
* Submissions may be authored by any amount of participants
* Participants may have multiple submissions (this is discouraged)

### Submissions
* Games shall be uploaded to the [Minetest Content Database](https://content.minetest.net/)
* Packages must be tagged using `Jam / Game 2022`
* Packages will be held until work time ends, then approved for rating
* Games **must** use the `gamename_modname` prefix-style for non-library\* mod naming (good practice and proposed policy)

\* Libraries must follow the [Right to a Name policy](https://content.minetest.net/policy_and_guidance/#31-right-to-a-name). Git submodules recommended.  

## Scoring
Scoring will be done separately by both the community and a collection of judges. Jam winners will be determined via the judges, with a separate community winner voted by the community.  

### Judge Scoring
Judges will score each package out of 10 points (float).  
It is up to each judge how they score packages, though [a rubric will be provided](#judge-rubric) to set expectations.  

### "Bonuses"
Some [objective features](#bonus-rubric) will add up to 10 points to the final score. The final score will be out of 20, which means not meeting these criteria is a huge disadvantage.  

### Community Voting
Package reviews will be used to determine a single "Community Winner". Each package will be scored as a percentage calculated with `(total_positive + 1) / (total reviews + 1)`. Reviews with at least 1 "helpful" vote but more "unhelpful" votes will not be included in the calculation.  
The highest rated package that **does not place** will be deemed the Community Winner.

### Rubrics
#### Judge Rubric
Things that judges may be looking for in a submission.

| Criteria   | Description                                   |
| ---------- | --------------------------------------------- |
| Gameplay   | How intuitive and enjoyable is your gameplay? Is it a fulfilling experience? Is there a clear goal or ending? |
| Innovation | What makes your game unique? Do you have emergent mechanics or clever gameplay? |
| Content    | Is your game well-polished or packed with stuff to do? Is the art and sound consistent and cohesive? |
| Theme      | How well does your game utilize the theme(s)? Did you apply the theme(s) in a clever way? |

#### Bonus Rubric
These criteria will add points to your score.

| Criteria                         | Points |
| -------------------------------- | ------ |
| Is stable enough to complete.    | 5      |
| Works out of the box\*.          | 3      |
| Has a public **git** repository. | 2      |

\* Must not require external applications (ie. Python, Luarocks) or out-of game configuration (including mod trust).

### Tie Breaking
Packages with identical scores will be ranked according to the following (in order until determined):
* Positive review total
* Helpfulness of reviews
* Package ID (time submitted)

## Prizes
The winners will recieve 1/2, 1/3, and 1/6 of the prize pool for 1st, 2nd, and 3rd places, respectively.  

Winning submissions (including community winner) will all recieve ContentDB front page promotion.  
  
Other prizes TBD.  

### Pool and Payout
The prize pool is funded by community contributions and jam management.  

The pool cap is **$600USD**. Contributions should not exceed this amount and will be refused once the cap is reached.  

The prize pool is held and managed through _PayPal_ by _GreenXenith_ (contact for contribution information). Contributions to the pool will be accepted up to the end of the jam deadline.  

**Paypal is required to contribute and receive funds.** This _is_ negotiable at payout, but entirely at the discretion of the handler. Payouts will be divided evenly for team winners. Remainders from uneven divisions will go to the [Minetest Project](https://www.minetest.net/get-involved/#donate).  

### Disclaimer
By participating and/or contributing, you understand and accept that all involved funds will be aggregated and distributed by a private third-party (GreenXenith) through a proprietary third-party service (PayPal) to you (the contestant) or the destination of your choice, at the complete discretion of the private handler (GreenXenith).  

## Results
Full results will be made public in the [data repository](#data-repository). Each package will include the following:
* Final judge and community score
* Placement in total ranking
  * Placement in community ranking
  * Placement in judge ranking
* Score from community rankings
  * How many +1/-1
  * How many disqualified reviews
* Combined score from all judges (anonymous)
  * May include notes from judges
* Bonus rubric marks
* Honorable mention categories (if applicable)

## Judges
Judges are chosen from well-known and trusted members of the community by jam management.  

### Current Judges
This list is subject to change.
* MisterE
* GreenXenith
* Warr1024
* ExeVirus

### Judge Participation
Judges are allowed to make submissions. Submission rules:
* Judges may not rate their own submissions
* Judge entries are not elligible for prizes
* Judge submissions will be soft-ranked (not affecting actual package ranking)

## Promotion
Jam information will be hosted on a Minetest Forum thread and a website (TBD). All community platforms will have information relayed to them on a regular basis where possible.  
The Minetest Content Database acts as the central submission space.  

## Data Repository
The [data repository](https://github.com/GreenXenith/minetestgamejam) holds all public data for the game jam. This includes (but is not limited to):
* Planning documents
* Distributed info/flyers
* Jam results
* Event statistics

## Jam Management
The Minetest Game Jam is organized and operated by GreenXenith, with the input and assistance of various community members, including (but not limited to) rubenwardy and Warr1024.  

[Back to Top](#)
