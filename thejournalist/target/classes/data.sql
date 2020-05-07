insert into CATEGORY (name) values ('world');
insert into CATEGORY (name) values ('news');
insert into CATEGORY (name) values ('technology');
insert into CATEGORY (name) values ('culture');
insert into CATEGORY (name) values ('health');
insert into CATEGORY (name) values ('science');
insert into CATEGORY (name) values ('opinion');
insert into CATEGORY (name) values ('business');

insert into COMMENT (name,email,body,datecreated) values ('Jane Smith', 'jane@smith.com', 'comment 1',current_timestamp);
insert into COMMENT (name,email,body,datecreated) values ('Bob Russel', 'bob@russel.com', 'comment 2',current_timestamp);
insert into COMMENT (name,email,body,datecreated) values ('Jaime Doe', 'jaime@doe.com', 'comment 3',current_timestamp);

insert into KEYWORD (name) values ('space');
insert into KEYWORD (name) values ('earth');

insert into AUTHOR (name,email,bio,image) values ('Eva Jonas', 'eva@journalist.com', 'Norwegian journalist', 'https://i.pinimg.com/236x/a3/3c/f6/a33cf6780800fe70920b9b233d4f03b0--lisa-teige-skam-eva.jpg');
insert into AUTHOR (name,email,bio,image) values ('Tyrell Wellick', 'tyrell@journalist.com', 'Former Senior Vice President of Technology for E Corp','https://66.media.tumblr.com/7623751d5fbcacdaa3b227e86023edc8/tumblr_oxzct9xAYu1rp6b7zo3_250.png');
insert into AUTHOR (name,email,bio,image) values ('Joan Didion', 'joan@journalist.com', 'American literary journalist, novelist and memoirist','https://i.pinimg.com/236x/bf/5d/e5/bf5de5571b5eab6dab5df542bb4ce6b2.jpg');
insert into AUTHOR (name,email,bio,image) values ('Mikaela Shiffrin', 'mikaela@journalist.com', 'American two-time Olympic gold medalist and World Cup alpine skier.','https://stillmed.olympic.org/sitecore/shell/-/media/Images/OlympicOrg/Athletes/S/Shiffrin_Mikaela/SHIFFRIN_MIKAELA_mugshot_2.jpg');
insert into AUTHOR (name,email,bio,image) values ('Jane Goodall', 'jane@journalist.com', 'English primatologist and anthropologist.','https://www.irishtimes.com/polopoly_fs/1.3301169.1511368242!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg');
insert into AUTHOR (name,email,bio,image) values ('Alan Turing', 'alan@journalist.com', 'English mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist.','https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTUzMTE2Njg3/alan-turing-9512017-1-402.jpg');
insert into AUTHOR (name,email,bio,image) values ('Carl Sagan', 'carl@journalist.com', 'American astronomer, cosmologist, astrophysicist, astrobiologist, author, science popularizer, and science communicator in astronomy and other natural sciences.','https://img.discogs.com/MQ2KI-s9Dz00PAs13RSHKAKE01g=/600x536/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-1622298-1258592093.jpeg.jpg');

--world
insert into ARTICLE (body,summary,title,datecreated,datelastmodified,categoryid,views,upvotes,status,image) values (
'In 2020, with the world suffering from the spread of Covid-19, Native American tribes are some of the most at-risk from the virus, and a GoFund me was set up to issue relief to some of the most vulnerable nations.

The Navajo Nation and Hopi reservation are "extreme food deserts" with a third of people not having access to running water and with high numbers of at-risk residents.

A relief fund was set up by local volunteers to help supply food, PPE and other essential items, and countless Irish people have donated with messages of support and thanks, saying they wish to repay the 173-year-old favour.

A message from one Irish donor, Pat Hayes, sent a donation and message of support: “From Ireland, 170 years later, the favour is returned! To our Native American brothers and sisters in your moment of hardship.”

The organisers of the fund have now thanked Irish people for their donations, with Vanessa Tulley writing on the GoFundMe page:

"Acts of kindness from indigenous ancestors passed being reciprocated nearly 200 years later through blood memory and interconnectedness.

"Thank you, IRELAND, for showing solidarity and being here for us."',
'In 1847, Ireland was gripped by ''the great hunger'', and Native Americans were struggling to rebuild their lives after suffering through the Trail of Tears.',
'Irish donate to Native American tribes hit by Covid-19 to repay 173-year-old favour',
current_timestamp,
current_timestamp,
1,
12,
5,
'draft',
'https://media.irishpost.co.uk/uploads/2020/05/05154315/spirit-1.jpg');

--news
insert into ARTICLE (body,summary,title,datecreated,datelastmodified,categoryid,views,upvotes,status,image) values (
'ROME — It is the sort of development that might catch the eye of anyone weary of lockdowns: The Italian island of Sicily wants to lure back tourists by discounting plane tickets and covering every third night in hotels.

But even as European nations begin to emerge from stay-at-home restrictions, they are nowhere close to reopening as international vacation destinations.

The most optimistic countries — Greece and Portugal among them — hope there''s a chance they might be able to pitch themselves as safe options by the second half of summer. Others, including Italy, are looking to regional travel to partially salvage their tourism industries and economies, while they sort out when to reopen borders and whom to let in.

“It is too soon to say whether we can take holidays,” President Emmanuel Macron told French citizens Tuesday. “What I can say is that we will limit major international travel, even during the summer. We will stay among Europeans and depending on how the epidemic evolves, we might have to reduce that a little more.”

And in Sicily, though money has been set aside to relaunch tourism, it isn''t yet clear when the promotion will become possible.

Travel has been tightly restricted in Europe since March, when the continent''s vaunted open borders closed in quick succession, and the European Union shut its external boundaries to nonessential travel. European leaders credit the combination of those closures and strict social distancing measures with helping them to slow the spread of the novel coronavirus.

Now, as governments seek to get their societies moving again without triggering an unmanageable spike in transmissions, they are counting on continued or even reinforced restrictions at their borders to help maintain some level of control.

The European Union''s ban on nonessential travel from countries outside the bloc is set to expire May 15. But one E.U. official, speaking on the condition of anonymity to discuss deliberations, said the ban was highly likely to be extended for another month at least.',
'Countries are desperate for tourist revenue but also worried about opening their borders too soon.',
'Europe is loosening coronavirus restrictions. But don''t expect to vacation there anytime soon.',
current_timestamp,
current_timestamp,
2,
7,
0,
'draft',
'https://www.traveller.com.au/content/dam/images/h/1/a/m/8/q/image.related.articleLeadwide.620x349.h1am8c.png/1548738507159.jpg');

-- technology
insert into ARTICLE (body,summary,title,datecreated,datelastmodified,categoryid,views,upvotes,status,image) values (
'Malicious software, or malware, is a major problem for modern businesses. Malware is able to spread via removable media, and it is risky to use such media if the source cannot be identified .One such example is a recent study that has shown that as many as half of the USB sticks that are picked up in parking lots of business properties are then plugged into the user’s   computer once they get inside their offices. This means that any malicious software that is on the USB drive can then infect the company network. Rewriteable CDs, DVDs, and BluRays are all capable of delivering a malicious payload if autorun is enabled on a desktop PC, laptop or server, so having an up to date antivirus application is essential for businesses to ensure the continued safety of their network.',
'USB devices and other removable media are being used to spread cryptocurrency mining software – and have been since at least 2015.',
'The Security Awareness Hazards Of Removable Media',
current_timestamp,
current_timestamp,
3,
10,
4,
'published',
'https://www.sasa-software.com/wp-content/uploads/2019/11/1.-Thumb-drive-2-1024x576-1024x576.jpg');

insert into ARTICLE (body,summary,title,datecreated,datelastmodified,categoryid,views,upvotes,status,image) values (
'Ireland is a cybersecurity powerhouse according to Accenture''''s third annual State of Cyber Resilience Study. Based on a survey of more than 4,600 enterprise security experts worldwide, the study found that Ireland is the country with the highest proportion of cybersecurity leaders globally.

A cybersecurity leader is a company that achieves significantly better results from its cybersecurity technology investments than other organisations. Leaders were characterised as among the highest performers in a number of categories including stopping attacks, finding and fixing breaches, and reducing breach impact.

Overall, 28 per cent of Irish companies were classified among this elite group as opposed to an average of 17 per cent for other countries covered by the study.

"Our research has identified a group of standout organisations in Ireland that appear to have cracked the code of cybersecurity when it comes to best practices,” says Jacky Fox, managing director of Accenture Security in Ireland.

"These leaders are far quicker at detecting a breach, mobilising their response, minimising damage and getting operations back to normal.”

She believes Ireland''s strong showing in the study is due to a combination of factors. "I was really delighted with that result but not very surprised,” she says. "A huge variety of organisations emerged as cybersecurity leaders. These companies have very diligent boards who woke up to the cybersecurity issue a lot earlier than many others. We have also been lucky in our regulators like the Central Bank and the Department of Communications who have been beating the cybersecurity drum for quite a while.”',

'From detecting breaches and responding to them, Irish organisations are ahead of the game when it comes to cybersecurity',
'How Ireland''s leaders are cracking the cybersecurity code',
current_timestamp,
current_timestamp,
3,
10,
4,
'published',
'https://kalkawebsolutions.com/wp-content/uploads/2019/09/endpoint-security.jpg');



-- culture
insert into ARTICLE (title,summary,body,datecreated,datelastmodified,categoryid,views,upvotes,image,status) values (
'''Star Wars: The Rise of Skywalker'' Review: A Perfectly Imperfect Last Chapter',
'Episode IX won''t be all things to all fans, but it''s a fine and fitting end to the Skywalker saga',
'Whether you were around in 1977 when creator George Lucas first unleashed his cultural behemoth in theaters, or you just started binge-watching the whole thing yesterday on your phone, Star Wars is undeniable — just as skipping the ninth (and, so they claim, the last) is unthinkable. All that''s left is the rush to judgment on whether director and co-writer J.J. Abrams made sure Star Wars: The Rise of Skywalker is everything you want and need it to be. Short answer: Of course it isn''t. 

The impossible job of being all things to all Star-gazers leaves Abrams, who kicked off the third trilogy with The Force Awakens in 2015, straining to cram in everything. The result is often chaos, but it’s also a euphoric blast of pulse-quickening adventure, laced with humor and heart. Sure, you’ll nitpick the thing to death with your friends. But that''s the point.

When it comes to Star Wars fandom, the infighting is as crucial as the love.
Of course you have questions about the plot: Who lives, who dies, who tells their story? Will Rey (Daisy Ridley) join Kylo Ren (Adam Driver) on the Dark Side? Is Reylo a thing? Will there be an epic kiss? Who are Rey''s parents? How does Carrie Fisher, who died in 2016, manage to turn up one last time as Princess Leia? Will the ghosts of Han (Harrison Ford) and Luke (Mark Hamill) — now one with the Force — make appearances? And will Episode IX really be the end?

The answers: It doesn''t feel like the end to me. And if I say anything more, the spoiler police will pounce.',
current_timestamp,
current_timestamp,
4,
32,
13,
'https://rollingstoneindia.com/wp-content/uploads/2019/12/EP9-066904_RW.jpg',
'published');

insert into ARTICLE (title,summary,body,datecreated,datelastmodified,categoryid,views,upvotes,image,status) values (
'Academy award winner Taika Waititi to direct and co-write new Star Wars feature film for theatrical release',
'Emmy nominee Leslye Headland to write, produce, and serve as showrunner for new untitled Star Wars series for Disney+.',
'Academy Award® winner Taika Waititi, who recently won Best Adapted Screenplay for Jojo Rabbit and directed the widely-acclaimed first season finale episode of The Mandalorian on Disney+, will direct and co-write a new Star Wars feature film for theatrical release.

Joining Waititi on the screenplay will be Academy Award® nominee Krysty Wilson-Cairns (1917, Last Night in Soho), who received a BAFTA Award for Outstanding British Film of the Year on the three-time Oscar-winning film, 1917.

In addition, Emmy®-nominated writer Leslye Headland (Russian Doll, Bachelorette) is currently developing a new untitled Star Wars series for Disney+. Headland will write, executive produce, and serve as showrunner for the series, which adds to a growing list of Star Wars stories for Disney’‘s streaming platform including The Mandalorian, now in post-production on Season Two, and two other previously announced series: one based on Cassian Andor’‘s life prior to the events of Rogue One: A Star Wars Story and another following the adventures of Obi-Wan Kenobi between Star Wars: Revenge of the Sith and Star Wars: A New Hope.

Release dates for both Waititi’‘s and Headland’‘s projects have not yet been announced.',
current_timestamp,
current_timestamp,
4,
32,
13,
'https://starwarsblog.starwars.com/wp-content/uploads/2020/05/star-wars-announcement-taika-tall.jpg',
'published');


insert into ARTICLE (title,summary,body,datecreated,datelastmodified,categoryid,views,upvotes,image,status) values (
'10 ways to get your travel fix from home',
'This week, check out changes at Airbnb, make a beeline to help pollinators, and tour Scotland with a Nat Geo photographer.',
'Exactly how is New Zealand, a country that appears to have eliminated the coronavirus, changing its tourism strategy?

What is Airbnb doing to ensure cleanliness in its properties? And what''s up with AirAsia''s new uniforms?
This week we answer these questions and more to help travelers navigate our changing world. As some countries in Europe take tentative steps toward limited reopenings, other nations are clamping down. 

The European Union''s estimated 2.3 million tourism businesses (which employ more than 12 million people) are looking for ways to save the industry''s summer season. But other regions are in retreat; on Monday, Argentina banned all ticket sales for commercial flights until September 1.

Travel news is flying fast despite all the disruption, and there are still ways to feed our wanderlust, inspire future journeys, and contribute to global conservation.

Here are some ideas you can take action on now.',
current_timestamp,
current_timestamp,
4,
32,
13,
'https://www.fodors.com/wp-content/uploads/2019/03/UltimateCostaRica__HERO_shutterstock_1245999643.jpg',
'published');

insert into ARTICLE (title,summary,body,datecreated,datelastmodified,categoryid,views,upvotes,image,status) values (
'The Best Horror Movies of the Year (So Far)',
'If a pandemic isn''t scary enough, frighten yourself with 2020''s best horror: The Invisible Man, Swallow, The Lodge, Blood Quantum, and more.',
'Four months into 2020 and we may have only one true horror blockbuster — thanks to a slow winter followed by the onset of a full-blown global pandemic. But behind Invisible Man is an impressive lineup of genre titles just begging for your attention. Before the novel coronavirus threw the world into a panic spiral, the horror genre was enjoying a series of grand returns on a smaller scale: of filmmaker Richard Stanley, of some classic 1980s screen heavies and B-movie legends, of the art-house horror darlings Veronika Franz and Severin Fiala. Given our uncertain times, we''re not sure if we''ll see another horror blockbuster this year, so in the meantime, we''ll relish the little things we have: a bad vacation with Riley Keough, a deep-sea dive with Kristen Stewart, a blood-soaked gathering at a local VFW chapter. Here is the best horror of 2020 so far.

1 BR
The “just moved to town” character in a horror movie always has high potential for peril, and 1 BR really drags that to the extreme. But the star of this movie, Sarah (Nicole Brydon Bloom), doesn''t make the mistake of going to the wrong party or doing the wrong drugs. She just moves into the wrong building and doesn''t realize that neither management nor the other tenants intend on letting her leave. In this pared-down thriller from writer and director David Marmor, a young woman moves to L.A. to get a fresh start and thinks she''s lucked into an ideal little apartment community, but wow is she wrong, and the very human, very real-feeling terror of Sarah''s experience makes 1 BR a bracing little indie gem.

After Midnight
You won''t see the long game of After Midnight coming, and that''s what makes it so much fun. Jeremy Gardner wrote, co-directed, and starred in this humble creature feature that is also a pretty inventive breakup movie. When Abby (Brea Grant) walks out on Hank (Gardner) after a decade-long relationship in their small southern hometown, Hank spirals into a depression and maybe starts going a little crazy, staying up late every night to fend off the mysterious monster that keeps banging on his front door. Is Hank''s grief pushing him to imagine some outlandish terror, or is there really something coming to his porch every night? And will he and Abby ever reconcile? The answers will surprise you.

Bit
Supergirl''s Nicole Maines stars in this queer transfeminist vampire dark comedy, and honestly, how often do you get to describe a movie that way? From writer and director Brad Michael Elmore, Bit follows a recent high-school graduate from a small Oregon town who is ready to make a new life in Los Angeles. On her first night out, though, she meets a group of vampires and ends up getting jumped into their brood. It''s a great little “Fuck the patriarchy!” twist on your classic creatures-of-the-night tale, and a good example of how movies can smoothly fold progressive gender politics into a story that''s just a damn fun time. Everyone wins!

Blood Quantum
The first zombie movie is widely considered to be White Zombie from 1932, in which the titular characters were Haitian drones working a white owner''s sugar plantation. Zombie movies have always been a subgenre rich with metaphor, and Canadian writer-director Jeff Barnaby''s take feels like a great punch up to the form. Centering on the residents of the Mi''gmaq reserve of Red Crow Native Americans, Blood Quantum depicts a zombie-virus outbreak to which indigenous people are immune, leaving them to battle back the amassing hordes of white undead that threaten their land and their lives. It''s bloody. It''s pissed off. And it''s well worth unpacking.

Color Out of Space
After a decades-long absence from the director''s chair (at least in the context of narrative features), Richard Stanley finally returned in the weirdest, wildest way with the H.P. Lovecraft adaptation Color Out of Space, for which he also wrote the screenplay. Nicolas Cage and Joely Richardson star as a married couple living in a beautiful rural home with their three kids. Their pleasant little life is rudely interrupted when a glowing meteorite strikes down in their front lawn. Soon, the surrounding area starts to resemble Area X in Annihilation, and each member of the family starts deteriorating in a uniquely disturbing way. (Plus, Cage goes absolutely nuts in this movie, which is a gorgeous sci-fi nightmare you can''t miss.)

Come to Daddy
A great thing about Elijah Woods is that if he''s starring in a movie it will almost certainly be strange or terrifying or gory or a combination of all three. In Come to Daddy, Wood plays Norval, a Los Angeles soft boy whose estranged dad has written a letter requesting a reunion at his remote coastal home. Since Norval knows almost nothing about his dad and yearns to connect, he agrees and schleps through the woods into semi-isolation, where he finds a real bastard of a man waiting to greet him. But maybe his dad is just uncomfortable with his feelings when it comes to family? Well, the situation takes a truly bizarre turn for the worse, and things just keep getting crazier and bloodier from there.

Gretel & Hansel
Director Osgood Perkins specializes in slow-moving tone studies that immerse the viewer in haunting environs, and his update of the Hansel & Gretel fairytale pays proper homage to its twisted Brothers Grimm origins. When the two kids are cast out of their home by an unhinged mother, Gretel (Sophia Lillis) knows it''s up to her to provide for and protect her little brother. One day deep in the woods they find a cottage with a beautiful bounty on the table, and hungry Hansel (Samuel Leakey) can''t help breaking in to steal a few bites. That, of course, is when they meet the witch of the house, who takes the siblings in to shelter them and fatten them up. Except this time around, the witch (named Holda, played by Alice Krige) takes a liking to Gretel and enlightens her about the truth of her feminine power and the secrets of the Earth. Sophia Lillis is having a moment, so get onboard.

The Invisible Man
The year''s first horror blockbuster is a new spin on a classic. Writer and director Leigh Whannell conceived of this take on Universal''s The Invisible Man by making the title character a domestic abuser and the hero his girlfriend who is trying to escape him at any cost. Adrian (Oliver Jackson-Cohen) swore to Cecilia (Elisabeth Moss) that she''d never be able to leave him, and if she ever tried he would find her and walk right up to her without her ever even noticing. Well, Adrian makes good on his promise after Cecilia breaks free, but he makes his presence very, very known — but only to her, dragging her back into his cycle of abuse and gaslighting alone. Moss gives a major performance, and Whannell threads the needle of mass-appeal cinema and vital social messaging with deftness, while still making a movie that hits like an 18-wheel truck.

The Lodge
The Lodge is a polarizing experience, and certain shocking narrative choices by co-directors Veronika Franz and Severin Fiala are just as likely to alienate some audience members as they are to cast an unbreakable spell on others. We sit in the latter camp. Riley Keough stars as Grace, a young woman going on a winter holiday with her fiancé and his kids, who are outraged he was able to replace their mother so quickly. To make matters worse, the dad (Richard Armitage) has to stay back in the city for work while the three of them hole up at a snowy cabin where, one morning, everyone wakes to find basically all of the household objects missing. No food. No Christmas stockings. No nothing. And they''re too snowed in to leave or get help. The mystery is, are the children having some insidious fun at Grace''s expense to punish their future step mom, or is there a supernatural menace manifesting from her mysterious past to terrorize them all? The directors behind Goodnight Mommy will make you question the fundamental innocence of children once again.

The Platform
There have already been a few serendipitous horror releases this year that feature people being trapped and/or tortured in one place. For the best of this group, Vulture selects The Platform, a Spanish movie that takes place in a vertical prison composed of concrete cubes stacked one atop another. The only food available is served on a platform that descends from level one down to the bottom, hundreds of cells below, forcing inmates to eat only what the people above them have been “generous” enough to leave behind. It''s brutal and grotesque, and the central character is a man who refuses to conform to the barbarism of the system — until desperation and hunger push him to the brink. The Platform debuted in the month social-isolation orders brought the country to a halt, and it couldn''t be a better feel-bad movie for the moment.

Swallow
Although the movie Swallow features a main character who develops a compulsion for eating dangerous objects, the real horror of the movie is existential. Haley Bennett plays a beautiful housewife named Hunter who has landed a rich man and lives in a rich home filled with rich things. She is utterly comfortable, and increasingly miserable as the paint-by-numbers life she married into starts crushing her under the weight of family expectations, shame, and imposter syndrome. Hunter''s desire to swallow what is forbidden sparks the beginning stages of a rebellion against the person she''s become. Carlo Mirabella-Davis wrote and directed this movie inspired by the life of his own grandmother, and it will haunt you long after it''s done.

Underwater
The fact that Underwater was made years ago and rather unceremoniously just dropped into theaters this January with little fanfare is a shame, because it is a fun and relentless thrill ride that stars Kristen Stewart saving lives and fighting sea monsters. When a humongous oil-drilling rig unleashes hordes of extremophiles (and one super-beast that looks uncannily like Davy Jones from the Pirates of the Caribbean movies), the only remaining crew members in the facility must make their way across the ocean floor in hopes of reaching undamaged escape pods, and it''s just a cascading series of terrors for about 90 minutes. Even T.J. Miller is a good, welcome addition to the cast, and how often are you hearing that in 2020?

VFW
Fire up that time machine, because we are going back to the 1980s. Director Joe Begos follows the excellent achievement that was Bliss with this rip-roaring story of a bunch of hard-ass service veterans caught in the middle of a feud between a sadistic drug dealer and a thief who steals his stash. The story is set in a nearish future in which a new, extremely addictive drug has turned huge swathes of the population into junkies, and when the local supplier loses his product to a young woman seeking revenge on him, he sends an army of tweakers into the bar where she seeks refuge, and where she is being protected by the likes of Stephen Lang, William Sadler, Fred Williamson, Martin Kove, and David Patrick Kelly. Heads will be split open. Limbs will be severed. And the blood will keep on flowing.

We Summon the Darkness
You know what? Let''s just fucking party! We Summon the Darkness is a charmingly cheeky 1980s throwback movie that takes the Satanic-panic craze and gives you a hair-metal horror comedy. Alexandra Daddario, Maddie Hasson, and Amy Forsyth star as a trio of rock chicks headed to a concert where they end up snagging three men eager to go home and have an after-party with them. There''s tension in the air, though, since a mysterious group of occultists have been ritualistically murdering people across the country. So really, who can you trust? Johnny Knoxville guests as a televangelist in this fun little rager.',
current_timestamp,
current_timestamp,
4,
32,
13,
'https://pyxis.nymag.com/v1/imgs/707/06a/16d794118a9012ebb5d0ca65fd9ccc431d-best-of-horror-so-far-may.rhorizontal.w700.jpg',
'published');

insert into ARTICLE (title,summary,body,datecreated,datelastmodified,categoryid,views,upvotes,image,status) values (
'How to make the best Irish coffee',
'Irish coffee is a cocktail of sweetened coffee, Irish whiskey, and whipped cream.',
'Just like whiskey an Irish Coffee is a drink that needs attention to be made to perfection. Irish Coffee was invented in 1947 by Joe Sheriddan in Shannon Airport when transatlantic flights recommenced after WW2. Joe wanted to serve the travellers an Irish drink, so the obvious choice was tea and whiskey! When he realised that American’s drank a lot of coffee so he carried out an experiment….and aren’t we glad he did.

INGREDIENTS
Irish whiskey
Coffee
Brown sugar
Whipped cream

METHOD
1. Heat your glass with some boiling water. Make sure you have a metal spoon in the glass when adding the boiling water to prevent the glass from cracking. Heating the glass keeps your Irish Coffee warm for longer so you can savour the moment…mmm
2. Pour in a measure of Irish whiskey
3. Add some coffee (if you are making an Irish Coffee at home you may need to add the coffee granules and some boiling water too)
4. Add in a spoonful of sugar. Make sure the sugar is mixed into the coffee well. Check the bottom of the glass to make sure there on no granules left at the bottom
…and now add the cream
5. Whisk some cream in a bowl. Don’t whisk the cream too stiffly or you won’t be able to pour it.
6. Turn a spoon upside down and place the tip of the spoon inside the coffee glass just on top of the coffee making sure that the edge of the spoon is touching the glass
7. Now slowly pour the whipped cream over the spoon. It should flow over the top of the spoon and land softly on top of the coffee. When you pour the cream gently it ensures that it doesn’t sink into the coffee
8. Sprinkle some chocolate on top of the cream
9. Find a cosy seat beside a warm fire on a winters day
10. Now sit back and relax as the cool cream mixes with the warm Irish whiskey & coffee and enjoy the moment ',
current_timestamp,
current_timestamp,
4,
32,
13,
'https://locable-assets-production.s3.amazonaws.com/uploads/resource/file/345514/Irish-Coffee.jpg?timestamp=1489507194',
'published');



--health
insert into ARTICLE (body,summary,title,datecreated,datelastmodified,categoryid,views,upvotes,status,image) values (
'For many people, going for a long run has been a liberation during lockdown. Some may even be contemplating including jogging to work as a way to actively commute once the restrictions are eased. However, it’s important not to push your body too far, too soon, as overdoing the activity can result in numerous niggles and complaints.

A study of more than 16,500 elite athletes published in the British Journal of Sports Medicine last year confirmed that while in other sports problems strike in the thighs, upper body and trunk areas, in endurance runners injuries are most likely below the knee. Blisters and blackened toenails, tendon pain and the dreaded plantar fasciitis, caused by overloading the connective plantar fascia tissue that runs from',
'Corns, heel pain, fat-pad atrophy — the experts tell Mikaela Shiffrin how to treat and avoid foot problems',
'Common running injuries and how to avoid them',
current_timestamp,
current_timestamp,
5,
52,
8,
'published',
'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Feda1fa9a-8e1f-11ea-866d-11e3826964c3.jpg?crop=6120%2C3442%2C0%2C370&resize=1180');

insert into ARTICLE (body,summary,title,datecreated,datelastmodified,categoryid,views,upvotes,status,image) values (
'One way to boost your immune system is through a plant-based diet. Since white blood cells that produce antibodies help the immune system to combat viruses, bacteria and other bad stuff, it stands to reason you want healthy white blood cells.

People who eat a diet rich in vegetables and other plant-based items statistically show more effective white blood cells compared to those who eat less plant-based matter.

✓ Beta Carotene
Betacarotene
zovon.com
Found in a variety of food items, in particular leafy greens, beta-carotene is rich in antioxidants. Known for its ability to reduce inflammation, beta-carotene can also boost the bodies ability to fight diseases by increasing the function of your immune system.

To increase the beta-carotene in your diet, look for dark greens such as kale, spinach and broccoli. In addition, you can add other vegetables such as carrots as well as fruits like cantaloupe, peaches and mangoes.

✓ Vitamin C
viramin c sources
windowofworld.com
Colorful red peppers, broccoli, oranges, strawberries and kiwi are examples of foods rich in vitamin C. Vitamin C is well known for giving your bodies natural immune system a kick start into high gear. This means your bodies natural healing response goes into overdrive!

✓ Vitamin E
Natural Foods High In A Vitamin E.
myimyi.com
Having many of the same health benefits of Vitamin C, Vitamin E helps your body to fight sickness. This is like a quick boost to your immune system! Vitamin E is commonly found in nuts, seeds, broccoli and spinach.

✓ Zinc
zinc sources
supplemania.net
Coupled with Vitamin C, zinc is well known for prevention and shortening the duration of the common cold.  Foods high in zinc are avocados, blackberries, pomegranates, raspberries and cantaloupes. While zinc may not offer immunity, if you’ve ever had a nasty cold even shortening the life of the cold is a great perk!',
'Rich in antioxidants, superfoods are considered nutritionally dense.',
'Best Superfoods to Boost Your Immune System!',
current_timestamp,
current_timestamp,
5,
52,
8,
'published',
'https://www.readersdigest.ca/wp-content/uploads/2019/08/fall-superfoods-1200x675.jpg');



--science
insert into ARTICLE (title,summary,body,datecreated,datelastmodified,categoryid,views,upvotes,image,status) values (
'Pale Blue Dot',
'The Earth is the only world known, so far, to harbor life.',
'From this distant vantage point, the Earth might not seem of any particular interest. But for us, it''s different. Consider again that dot. That''s here. That''s home. That''s us.
On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives.
The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every "superstar", every "supreme leader", every saint and sinner in the history of our species lived there – on a mote of dust suspended in a sunbeam.
The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that in glory and triumph they could become the momentary masters of a fraction of a dot. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner.
How frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds. Our posturings, our imagined self-importance, the delusion that we have some privileged position in the universe, are challenged by this point of pale light.
Our planet is a lonely speck in the great enveloping cosmic dark.
In our obscurity – in all this vastness – there is no hint that help will come from elsewhere to save us from ourselves.
The Earth is the only world known, so far, to harbor life. There is nowhere else, at least in the near future, to which our species could migrate.
Visit, yes. Settle, not yet. Like it or not, for the moment, the Earth is where we make our stand. It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world.
To me, it underscores our responsibility to deal more kindly with one another and to preserve and cherish the pale blue dot, the only home we''ve ever known.',
current_timestamp,
current_timestamp,
6,
124,
87,
'https://cdn.theatlantic.com/thumbor/Ki28Af7LUpc7cNzA0UsYGZHl3ec=/672x594/media/img/posts/2020/02/P36254/original.jpg',
'published');

insert into ARTICLE (body,summary,title,datecreated,datelastmodified,categoryid,views,upvotes,status,image) values (
'The Universe is a wondrous place, full of vast numbers of planets to explore, unsolved mysteries, and even ''superbubbles'' blown by black holes.

But there''s one thing that space really isn''t: loud. Without Earth''s air molecules to help you hear, out there in space you''d be listening to a whole lot of silence.

Luckily, that didn''t stop NASA from figuring out a way to produce sound in the soundlessness of space back in 2019 - by ''sonifying'' the above image taken by the Hubble Space Telescope.

Yep, move over music, podcasts, or audio-books - the new thing to listen to is Hubble images.

The image NASA used for this project was taken by the Hubble''s Advanced Camera for Surveys and Wide-Field Camera 3 back in August 2018.

The guys working with Hubble call the image a ''galactic treasure chest'' because of the number of galaxies splattered across it.

"Each visible speck of a galaxy is home to countless stars," NASA explained about the image.

"A few stars closer to home shine brightly in the foreground, while a massive galaxy cluster nestles at the very centre of the image; an immense collection of maybe thousands of galaxies, all held together by the relentless force of gravity."

But as beautiful as this image already is, it just reached a new level, once transformed into a stunningly eerie musical composition.

"Time flows left to right, and the frequency of sound changes from bottom to top, ranging from 30 to 1,000 hertz," NASA explained in comments accompanying the video.

"Objects near the bottom of the image produce lower notes, while those near the top produce higher ones."

And although it might sound a little eerie at first, the ''sounds'' of this picture create a rather beautiful melody, especially near the middle, when the sound reaches a galaxy cluster called RXC J0142.9+4438.

"The higher density of galaxies near the centre of the image," the team explained, "results in a swell of mid-range tones halfway through the video."

So there you have it: an entirely new way to enjoy the Universe.',
'Without Earth''s air molecules to help you hear, out there in space you''d be listening to a whole lot of silence.',
'NASA Has Translated a Hubble Photo Into Music, And It''s Absolutely Chilling',
current_timestamp,
current_timestamp,
6,
10,
4,
'published',
'https://www.sciencealert.com/images/2019-03/processed/potw1833a2_web_1024.jpg');


-- opinion
insert into ARTICLE (body,summary,title,datecreated,datelastmodified,categoryid,views,upvotes,status,image) values (
'Norwegian youth spend more than four hours a day on social media,according to a study.Some believe it''s a waste of time but I understand why we do it very well.Society is straightforward on social media.Where you can just log off or block everything you don''t like.Today, we celebrate our constitution.It says that everyone has equal rights and that humans are born free and shall remain free.Free to be on social media for four  hours. Free to get wasted and fuck around. Free to use 900.000 for Russ bus.

Norway isn''t the same country as it was when the Constitution was written.Norwegian society is constantly developing.Today thousands of refugees are coming into Europe in search of peace to live.Those are people from different cultures than us. People whose values we may disagree with.Some are afraid they will threaten our Norwegian values.It would have been best to have the Facebook function to just block them but that''s not how it goes. So on this day when we celebrate our Constitution, we shall remember that we celebrate. If we believe in the values it is based on.If we agree with the idea that all people should be free and have equal rights,it''s not our responsibility to fight to persevere the values for all people.It''s not there to open doors to strangers who want to threaten our values.But it''s there to not open the doors for them.

We live in a society because we need each other.People need people.It can be tiring to deal with others especially the ones you disagree with.Those who think differently from you, whether some are from another culture or a girl who''s a lame Facebook friend from elementary school.In a peaceful society with equal rights we have to manage to listen to and try to understand each other.Perhaps it''s easier to understand if we focus on what we have in common rather than the differences.Look for what we agree with instead of what we disagree with. Maybe if we see the worst in others, it''s exactly that what they will show us.

We have the right to waste four hours on social media every day.Because some before us have fought for the freedom to do so.Soon it''s us who will take over this country. It''s up to us which values we live by the future.I hope equal rights and freedom for all the people of this world is a battle we are ready to take on completely serious.If not we who are raised in the world''s most free and richest country.If not we choose generosity,patience and openness. If not we choose to look for and believe in the good in each other.if not we can fight for righteousness .Then who would be able to do it? ',
'What does May 17 mean to students?',
'Youthful freedom and responsibility',
current_timestamp,
current_timestamp,
7,
10,
4,
'published',
'https://cdn.pixabay.com/photo/2020/02/01/00/19/norway-4809258_960_720.jpg');

-- business
insert into ARTICLE (body,summary,title,datecreated,datelastmodified,categoryid,views,upvotes,status,image) values (
'Here''s a development everyone should have been able to see coming from a mile away. The coronavirus pandemic that''s resulted in widespread quarantines and stay-at-home orders around the world means that several million new people have since decided they can''t live without the service that gave the world such hot TV properties during the quarter as Tiger King and the third season of Ozark.

That''s according to new analyst estimates about Netflix''s subscriber base during the same quarter that saw the onset of the COVID-19 crisis which has brought daily life in the US and most of the rest of the world pretty much grinding to a halt. One of the tried-and-true entertainment pursuits you can enjoy while hunkering down at home, though, is a Netflix binge — with this fact leading analysts to expect a huge quarterly performance when the streamer provides its latest earnings update next week.

“We raised our Netflix global subscriber forecasts materially on likely higher gross subscribers and lower subscriber churn boosted by global consumer ‘stay at home'' orders around COVID-19,” Pivotal Research Group analyst Jeff Wlodarczak wrote in a new report. “We believe the unfortunate COVID-19 situation is cementing Netflix''s global direct-to-consumer dominance partly driven by the incremental content spend that is enabled by their massive and growing subscriber base.”

For a rundown of the hottest Netflix series that users have been bingeing over the past week, which reflects both new programming and titles added throughout the quarter, click here. Because the company''s pipeline of content like that remains strong, Wlodarczak''s report includes a raised estimate for the streamer''s subscriber additions during the just-ended quarter — which he now pegs at 8.45 million, up from 7.9 million.

This also helps explain his increase in the price target for Netflix''s stock, which he raised by $65 to now $490 a share. One additional point he addresses in his report is his assessment that Disney+ at this point seems more complementary than competitive with Netflix. That, in fact, Disney+ will probably steal more from traditional TV, instead of Netflix.

“We remain bulls on the Netflix story, as Netflix offers consumers an increasingly compelling unique entertainment experience on virtually any device without commercials at a relatively low cost,” wrote Wlodarczak. “The company appears to operate in a virtuous cycle, as the larger their subscriber base grows (and their average revenue per user increases) the more they can spend on original content, which increases the potential target market for their service (and reduces existing subscriber churn) and enhances their ability to take future price increases and dramatically increases barriers to entry, boosted by continued material increases in broadband availability/speeds globally.”',
'Netflix is an American media-services provider and production company headquartered in Los Gatos, California.',
'Millions are subscribing to Netflix during the coronavirus pandemic',
current_timestamp,
current_timestamp,
8,
10,
4,
'published',
'https://boygeniusreport.files.wordpress.com/2020/03/netflix-iphone-app-sign.jpg?quality=98&strip=all&w=782');


insert into ARTICLE (title,summary,body,datecreated,datelastmodified,categoryid,views,upvotes,status,image) values (
'Present Your Data Like a Pro',
'How you present data can double — or decimate — its impact',
'With so many ways to spin and distort information these days, a presentation needs to do more than simply share great ideas — it needs to support those ideas with credible data. That''s true whether you''re an executive pitching new business clients, a vendor selling her services, or a CEO making a case for change.

“Knowing how to develop and deliver a data-driven presentation is now a crucial skill for many professionals, since we often have to tell our colleagues stories that are much more compelling when they''re backed by numbers," says researcher and consultant Alexandra Samuel.

No problem, you may say. A bar graph here, and a pie chart there, and you''re off to the races, right?

Not so fast. Because while a good presentation includes data, data alone doesn''t guarantee a good presentation. It''s not the mere presence of data that gives the presenter power. It''s how that data is presented.

Showcasing data may seem simple in the age of PowerPoint, Prezi, Canva, Visme, Haiku Deck, and other nonsensically named technological platforms. But raise your hand if you''ve ever been confused by a chart you saw at a conference or ever heard a presenter say, “You probably can''t see this diagram well but what it''s showing is…"? What could be a bigger chart fail than the chart itself being rendered useless?

How you present data can double — or decimate — its impact, so take note of these seven ways to ensure that your data is doing its job.

1) Make sure your data can be seen
This may sound obvious but sometimes you''re too close to your presentation — literally. What is readable on your laptop may be far less so when projected on a screen. Your audience won''t learn what it can''t see. To avoid the debacle of sheepishly translating hard-to-see numbers and labels, rehearse your presentation with colleagues sitting as far away as the actual audience would. Ask them, “Can you see this chart clearly?" If the answer is anything but a firm “yes," redesign it to be easier on the eyes.

2) Focus most on the points your data illustrates
In comic book terms, you are Wonder Woman, and data is your magic lasso — a tool that strengthens your impact but has no value until you apply it purposefully. Don''t leave the burden of decoding your data to your audience. It''s your job to explain how the data supports your major points.

“Data slides aren''t really about the data. They''re about the meaning of the data," explains presentation design expert Nancy Duarte. “It''s up to you to make that meaning clear before you click away. Otherwise, the audience won''t process — let alone buy — your argument."

When you connect data to the essential points it supports, the transition should be explicit and sound like this:

“This data shows…"


“This chart illustrates…"

“These numbers prove…"

These transitions can be as important as the conclusions themselves, because you''re drawing the audience''s attention to those conclusions.

3) Share one — and only one — major point from each chart
The quickest way to confuse your audience is by sharing too many details at once. The only data points you should share are those that significantly support your point — and ideally, one point per chart. To keep your charts in check, ask yourself, “What''s the single most important learning I want my audience to extract from this data?" That''s the one learning you should convey. If you have several significant points to make, consider demonstrating each with a new visualization.

The mistake many presenters make is thinking they''re constitutionally required to share every bullet, idea, and data point on a slide. But if you''re sharing a pivotal trend that grew dramatically between 2014 and 2017, what happened in 2013 may be pointless. If 77% of respondents prefer one product and 21% prefer another, what the remaining 2% prefer may also be too insignificant to justify mentioning.

Data-presentation guru Scott Berinato says, “The impulse is to include everything you know, [but] busy charts communicate the idea that you''ve been just that — busy, as in: ‘Look at all the data I have and the work I''ve done.''"

4) Label chart components clearly
While you''ve been working with the same chart for weeks or months, your audience will be exposed to it for mere seconds. Give them the best chance of comprehending your data by using simple, clear, and complete language to identify X and Y axes, pie pieces, bars, and other diagrammatic elements. Try to avoid abbreviations that aren''t obvious, and don''t assume labeled components on one slide will be remembered on subsequent slides.

Some members of your audience are visual learners (like me!) who process what they see much better than what they hear, so your chart''s visual intuitiveness and clarity are crucial.

5) Visually highlight “Aha!" zones
Every valuable chart or pie graph has an “Aha!" zone — a number or range of data that reveals something crucial to your point.

Smart presenters explain the relevance of the “Aha!" zone orally, sharing the learning, trend, or story the data is telling.

Better presenters explain it out loud, but also write it on the slide as a bullet.

But the best presenters do all of the above AND visually highlight the “Aha!" zone itself with a circle or shading to reach the differentiated (aural, verbal, visual) learners in their audience, as well as to triple-reinforce the most important data takeaways.

6) Write a slide title that reinforces the data''s point
Even when data is presented effectively on a slide, the most valuable real estate is the page''s title because that''s the first item the audience will notice and process. But all too often, presenters use generic words and phrases like “Statistics" and “By the Numbers" that serve no functional purpose.


Even when the titles are specific, like “Millennial Preferences" or “Campaign Awareness," they can still be elevated with more point-specific titles like “Millennials Prefer Mobile" or “Campaign Awareness is Increasing."

7) Present to your audience, not to your data
Many presenters look at their slides while they share data as if the PowerPoint is their audience. But only your audience is your audience, and, as fellow human beings, they receive your points best when you look them in the eye. This doesn''t mean that you should never look at your data — just don''t have a conversation with it. Glance at your slides for reference, but make critical points directly to your audience.

When presented clearly and pointedly, data can elevate your point''s credibility and trustworthiness. Presenting data poorly not only squanders that opportunity but can damage your reputation as a presenter. Like Wonder Woman''s lasso, it''s a powerful tool to draw out compelling truths — wield it wisely.',
current_timestamp,
current_timestamp,
8,
10,
4,
'published',
'https://hbr.org/resources/images/article_assets/2020/02/Feb20_14_171272186-1024x576.jpg');





-- ASSOCIATIONS
insert into KEYWORDS_ARTICLES (keywordid,articleid) values (1,4);
insert into KEYWORDS_ARTICLES (keywordid,articleid) values (2,1);

insert into AUTHORS_ARTICLES (authorid,articleid) values (5,1); -- goodall
insert into AUTHORS_ARTICLES (authorid,articleid) values (3,2); -- tyrell
insert into AUTHORS_ARTICLES (authorid,articleid) values (6,3); -- alan
insert into AUTHORS_ARTICLES (authorid,articleid) values (6,4); -- alan
insert into AUTHORS_ARTICLES (authorid,articleid) values (1,5); -- joan
insert into AUTHORS_ARTICLES (authorid,articleid) values (1,6); -- eva
insert into AUTHORS_ARTICLES (authorid,articleid) values (3,7); -- joan
insert into AUTHORS_ARTICLES (authorid,articleid) values (1,8); -- eva
insert into AUTHORS_ARTICLES (authorid,articleid) values (3,9); -- joan
insert into AUTHORS_ARTICLES (authorid,articleid) values (4,10); -- carl
insert into AUTHORS_ARTICLES (authorid,articleid) values (4,11); -- eva
insert into AUTHORS_ARTICLES (authorid,articleid) values (7,12); -- carl
insert into AUTHORS_ARTICLES (authorid,articleid) values (2,7); -- carl
insert into AUTHORS_ARTICLES (authorid,articleid) values (1,14); -- eva
insert into AUTHORS_ARTICLES (authorid,articleid) values (2,15); -- tyrell
insert into AUTHORS_ARTICLES (authorid,articleid) values (2,16); -- tyrell

insert into ARTICLE_COMMENTS (ARTICLE_ARTICLEID,COMMENTS_COMMENTID) values (1,1);
insert into ARTICLE_COMMENTS (ARTICLE_ARTICLEID,COMMENTS_COMMENTID) values (1,2);
insert into ARTICLE_COMMENTS (ARTICLE_ARTICLEID,COMMENTS_COMMENTID) values (2,3);