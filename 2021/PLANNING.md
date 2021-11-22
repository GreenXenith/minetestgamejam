# Minetest GAME JAM 2021
Planning Document  

Table of Contents
-----------------
1. [Schedule](#schedule)
2. [Goal/Theme](#goaltheme)
3. [Rules](#rules)
   1. [Submissions](#submissions)
4. [Scoring](#scoring)
   1. [Community Rating](#community-ratings)
   2. [Judge Scoring](#judge-scoring)
   3. [Bonuses](#bonuses)
   4. [Total](#total)
5. [Rubrics](#rubrics)
   1. [Judge Rubric](#judge-rubric)
   2. [Bonus Rubric](#bonus-rubric)
6. [Prizes](#prizes)
   1. [Ranking](#ranking)
   2. [Tie Breaking](#tie-breaking)
   3. [Payout](#payout)
   4. [Prize Pool](#prize-pool)
   5. [Disclaimer](#disclaimer)
7. [Results](#results)
8. [Judges](#judges)
   1. [Judge Participation](#judge-participation)
9. [Promotion](#promotion)
10. [Data Repository](#data-repository)

## Schedule
* Pre-December: Cross-platform promotion
* December 1st  (00:00UTC): Development begins
* December 21st (00:00UTC): Development ends; Community rating begins
* December 30th (00:00UTC): Community rating ends
* December 31st: Tallying and results (may announce January 1st)

## Goal/Theme
**Small and complete experience.**  
The goal is to make a small game, not an immersive sandbox or an emergent RPG. Choose a simple, manageable idea, and divide your time wisely.  

Example game prompts will be provided.  

Examples:
* https://content.minetest.net/packages/Hume2/boxworld3d/
* https://content.minetest.net/packages/Just_Visiting/labyrinth/
* https://content.minetest.net/packages/1248/labyrinthus/

## Rules
* Game must be created within allotted time-frame
* Third-party libraries and assets may be used, but core gameplay must be own work
  * We **highly recommend** using git submodules for third-party libraries
* Teams are allowed (any size allowed, participants may participate in multiple teams and individually)

### Submissions
* Games shall be uploaded to the [Minetest Content Database](https://content.minetest.net/)
* Packages must be tagged appropriately (custom event tag)
* Packages will be held until work time ends and then approved to open for ratings
* Participants found unfairly influencing reviews will be **immediately disqualified**, but their package (if submitted) may remain as a regular CDB package.  

## Scoring
Scoring is a combination of community ratings, judge ratings, and bonus criteria.  

### Community Ratings
Package reviews are turned into a positive percentage (`positive reviews / total`).  
Reviews with majority unhelpfulness will not be included.  
An artificial negative and positive review will be factored in to fairly score packages with few reviews.  

### Judge Scoring
Judges score each package out of 10 points. All judge scores are averaged and converted to a percent (divided by 10).  
It is up to each judge how they score packages and are not required to follow any strict system (other than N/10), but [a rubric is provided](#judge-rubric) for your convenience.  
Judges may also nominate "Honorable Mentions" to be voted on by the panel.  

### Bonuses
Certain objective features [listed here](#bonus-rubric) will add bonus percentage to the final score. The other categories only add up to 90%, so all bonuses must be completed to make up the rest.  
Not meeting bonus criteria is a huge disadvantage.  

### Total
Each section is weighted and combined into a final percent.  
| Weights   |      |
| --------- | ---- |
| Community | 30%  |
| Judge     | 60%  |
| Bonus     | 10%* |

\* Bonus percentages add up to 10%, they are not weighted afterwards

Formula: `((comun_positive / comun_total) * 0.3) + ((avg_judge_score / 10) * 0.6) + bonus_percent`  

The final score is represented **out of 100**.  

## Rubrics
#### __Judge Rubric__
These are subjective ideas that you should keep in mind.

| Criteria      | Description                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------------- |
| Innovation    | What's different about your game? Are the mechanics new and clever? Is there unexpected gameplay?               |
| Gameplay      | How intuitive is your gameplay? Is it a fun one-sitting game or hours of emergent gameplay? Is it captivating?  |
| Content       | Is your game super polished? Or is there a lot to explore?                                                      |
| Audio/Visuals | Did you make beautiful art or music? Is the game style cohesive? Can you charm anyone with your programmer art? |
| Stability     | How well does your game run? Are there any unexpected crashes? Are there any warnings in the console?           |

#### __Bonus Rubric__  
These are bonus criteria that will add to your score.  

| Criteria                                                                                                             | Bonus |
| -------------------------------------------------------------------------------------------------------------------- | ----- |
| **The game is stable enough to play.**              <br> Any bugs or crashes should not hinder main gameplay.        | 5%    |
| **Package has a public <ins>git</ins> repository.** <br> Mercurial is cool, but we use git in this house.            | 3%    |
| **The game works out-of-the-box.**                  <br> No extra configuration, external programs, or trusted mods. | 2%    |

## Prizes
**PayPal is required to receive prize funds.**\*  

### Ranking
1. **50%** of pool
2. **30%** of pool
3. **20%** of pool

(Subject to adjustment based on [prize pool](#prize-pool))  

### Tie Breaking
Ties will be settled using the following metrics (in order until determined):
* Positive review total
* Helpfulness total
* Package ID (time)

### Payout
Winners will be contacted for payment address (PayPal account, charity, or other participant)  
Prize will be divided evenly for team submissions. Above clause applies. Remainders from uneven divisions will go the [Minetest Project](https://www.minetest.net/get-involved/#donate).  

\* PayPal is used for international accessibility reasons. Alternatives may be suggested at payout, but will only be used at handler's convenience. Crypto will not be considered.  

### Prize Pool
The prize pool is funded by community contributions. Those that wish to contribute should contact GreenXenith.  

Current pot: **$200**  
Current contributors:  
* MisterE
* MinetestVideos

### Disclaimer
By participating and/or contributing, you understand and accept that prize money will be aggregated and distributed by a private third-party (GreenXenith) through a secondary proprietary third-party service (PayPal) to you (the contestant) or the destination of your choice, at the discretion of the private handler (GreenXenith).  

## Results
Full results will be made public in the [data repo](#data-repository). Each package will include the following:
* Final score
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
Judges are chosen from well-known and trusted members of the community.  
Jam Judges (list subject to change):
* MisterE ($)
* MinetestVideos (Nathan Salapat) ($)
* GreenXenith
* Warr1024
* Benrob0329
* rubenwardy
* Hugues Ross
* Krock
* sfan5
* celeron55

\$: Current prize pool contributors

### Judge Participation
Judges **are allowed** to participate. Rules are as follows:
* Judges cannot rate their own package (this is a natural disadvantage)
* Judge entries are **non-competing**: They will not receive prizes
* Judges **will be ranked**, listed as a tie for whatever place they are in

## Promotion
This game jam is intended to be as decentralized as possible in order to avoid conflict over platform choice.  
The only centralized location is the ContentDB for submissions, as it is the only stable Minetest platform for content submission.  

Announcements and updates will be made and sent across every major community platform.  
* A single info page will be used for public event details. A master copy of this page will be held in the [data repository](#data-repository).
* Two mirrors of the master will be created and updated at:
  * [Minetest Forums](https://forum.minetest.net/)
  * [Minetest Subreddit](https://www.reddit.com/r/Minetest/)
* All other "socials" will use shorter messages and link to the 3 available detailed pages:
  * [IRC](irc://irc.libera.chat/#minetest)
  * [Discord](https://discord.gg/minetest)
  * [Matrix](https://matrix.to/#/+minetest:tchncs.de)
  * [Twitter](https://twitter.com/MinetestProject)
  * [Fosstodon](https://fosstodon.org/@minetest)

## Data Repository
The [data repository](https://github.com/GreenXenith/minetestgamejam) holds all public data for the game jam. This includes (but is not limited to):
* Planning documents
* Distributed info/flyers
* Jam results
* Event statistics

[Back to Top](#)
