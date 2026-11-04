# Unpublished archive — full vlog transcript

> **Not published.** This folder is outside Astro content collections and is not built into the site.
> Source: phone/AirPods recording 2026-11-03. ASR cleaned for Tanner-confirmed terms (SQL Server Management Studio, Fivetran) and Grok Bot branding.
> Related published post: `/posts/how-i-run-a-grok-bot-fleet-as-a-solo-data-engineer/`
> Video decision: not publishing the video (audio quality not salvageable). Blog is the deliverable.

Last updated: 2026-11-03 (America/Denver)

---

[00005.20 -> 00008.24] I've been listening to a lot of videos about Grok Bot,
[00008.44 -> 00009.00] sorry, not Ch
[00009.00 -> 00014.26] and the reason is because I'm a huge fan of Grok Bot and the support.
[00015.04 -> 00018.83] I'm a data engineer. I've worked with data bricks.
[00018.99 -> 00020.41] I've worked with other big data tools.
[00022.29 -> 00025.62] And on that journey, on that career path,
[00025.90 -> 00028.22] I've been encouraged to use AI at various points
[00028.22 -> 00031.40] and with various degrees of support.
[00032.32 -> 00034.04] For example, first company I worked with,
[00034.04 -> 00036.46] I worked with AI with a, you know,
[00036.76 -> 00038.58] really, really encouraged everybody to use AI,
[00038.78 -> 00041.36] but then anytime you wanted to actually connect it to anything
[00041.36 -> 00046.70] to let it work autonomously or do anything without just being kind of an assistant.
[00048.08 -> 00053.22] You had to go through this AI use case review council
[00053.92 -> 00056.32] that was made up of all of these heads in the company.
[00057.16 -> 00058.82] It was like a six-month process,
[00059.00 -> 00062.46] and I was like, no, it's not worth my time to write up a brief
[00062.46 -> 00066.94] and go, like, make that pitch and do all that stuff just to get us connected.
[00067.63 -> 00071.03] You know, I didn't get to recognize a lot of the value that AI could bring.
[00071.39 -> 00075.28] And to be fair, at the time, it couldn't do everything that it could do now.
[00075.76 -> 00079.74] And right now, for me, Grok Bot is like,
[00081.94 -> 00084.18] Grok Bot feels like what I was promised with AI.
[00084.96 -> 00091.01] And so I just wanted to kind of talk through how I'm using Grok Bot
[00091.01 -> 00097.23] and then where I feel like I can continue to go with it.
[00097.43 -> 00103.12] And then, you know, maybe you get some tips here
[00103.12 -> 00107.53] or some things to help you perform in the data space
[00107.53 -> 00110.97] or to perform in any kind of engineering space.
[00111.68 -> 00116.74] So if you haven't heard of Grok Bot, I highly recommend looking it up.
[00119.71 -> 00123.27] Basically, the main thing for me is just that you don't have to manage the context windows
[00123.27 -> 00127.57] because you have these highly specialized bots that are all on the team together.
[00127.85 -> 00131.83] They can all talk, they all share a VM, so they all technically have access
[00131.83 -> 00135.69] to the same information and processes and stuff like that.
[00135.75 -> 00137.27] But they'll respect each other's boundaries
[00137.27 -> 00139.47] even though they're operating on the same machine.
[00141.27 -> 00145.11] And then, usually, you'll just have one bot on top of all that
[00145.11 -> 00148.02] that can manage the rest of it for you
[00148.56 -> 00151.18] and can kind of hand off projects to individual bots
[00151.18 -> 00156.32] or, you know, just keep track of status across the sprawl
[00156.32 -> 00159.96] because you'll see over time, like, yeah, you'll create a lot of bots.
[00161.04 -> 00162.22] They're really, really useful.
[00164.13 -> 00166.29] But the main thing that's been beneficial for me
[00166.29 -> 00168.27] is just the ability to create that team.
[00169.32 -> 00171.80] So to give a little bit of background and context,
[00171.94 -> 00173.30] the role that I'm in right now,
[00174.52 -> 00179.77] I came from not a huge company but a larger company
[00179.77 -> 00184.10] where we had a data team that was, like, four, going on five,
[00184.76 -> 00187.78] back-end engineers just for, like, keeping the infrastructure going,
[00187.96 -> 00189.38] keeping Databricks, you know, plain,
[00191.26 -> 00194.88] getting all the data pipelines set up and managed
[00194.88 -> 00199.22] and managing the breakages when different APIs went out.
[00201.27 -> 00206.63] And then we had another team of, like, basically five of, like, data modelers
[00206.63 -> 00210.39] and people who were supposed to start learning to do, like, some BI work.
[00211.53 -> 00213.27] And rather than just the modeling.
[00214.01 -> 00215.83] But that was still kind of new form,
[00215.97 -> 00217.97] so they were still kind of inching into that field.
[00219.07 -> 00222.19] And now I'm in a role where it's just me for all of it,
[00222.35 -> 00224.83] for the data modeling side, for the BI work,
[00225.01 -> 00228.63] for the back-end, you know, Python API scripts
[00229.23 -> 00231.51] to pull data, do the incremental loads.
[00233.28 -> 00237.64] And, you know, I took the job knowing, like, hey, you know,
[00237.64 -> 00241.08] this is a lot to ask of a single senior data engineer.
[00242.12 -> 00245.56] And so this is an opportunity for me to really, like, show what I can do
[00245.56 -> 00247.44] and leverage that into, like, hey, you know,
[00247.56 -> 00253.50] this role is really more of a, you know, manager of BI, manager of data.
[00257.77 -> 00260.03] So I came in, I implemented Databricks,
[00260.59 -> 00263.23] and to be fair to Claude, Claude helped me do that.
[00264.23 -> 00267.01] I'd done a lot of the work with Databricks before,
[00267.41 -> 00271.25] but there were parts of, like, the deep back-end infrastructure
[00271.25 -> 00275.13] that I didn't set up. I used it a lot, but I wasn't the one who set it up.
[00275.37 -> 00276.61] I had an architect who did that.
[00277.59 -> 00280.05] And so I used Claude to really help me fill in the gaps there
[00280.05 -> 00283.05] and deploy Databricks in, like, less than a month, which was crazy.
[00283.95 -> 00285.95] Especially because it was on Azure and I was used to AWS.
[00286.43 -> 00290.71] Like, yeah, it just, it definitely doubled,
[00291.19 -> 00295.69] it got tripled by my speed and output over that month.
[00297.23 -> 00300.23] And that was important because, you know,
[00300.23 -> 00302.95] I was pitching this new data tool where they were on Power BI,
[00303.15 -> 00306.79] they were on, like, SQL Server Management Studio and Fivetran,
[00307.33 -> 00309.95] and I was pitching this on, like, yeah, I can do it cheaper,
[00310.85 -> 00312.23] but also I can do it better.
[00313.29 -> 00317.35] And it's not going to be, you know, a year-long implementation.
[00317.61 -> 00319.65] I can probably do this in, like, three months.
[00320.25 -> 00321.19] And I got it done in a month.
[00322.16 -> 00324.70] And so to be able to just hit the grud running
[00324.70 -> 00327.46] and deliver value immediately was amazing.
[00327.46 -> 00332.18] And it definitely got me the kind of trust capital
[00332.18 -> 00335.52] that I needed to continue to grow in the role
[00335.52 -> 00337.00] and get the autonomy that I needed
[00337.00 -> 00339.22] to operate the way that I wanted to.
[00340.63 -> 00343.99] But then Rockbot came and showed up.
[00345.21 -> 00347.65] So the pain points that I'd been struggling with up to that point
[00347.65 -> 00352.65] were that I could write Python connectors with Claude
[00353.17 -> 00355.47] and then, you know, I could have it
[00356.19 -> 00358.77] write to, you know, files on my local computer.
[00360.31 -> 00364.49] And so I could basically be hands-off with the connector work,
[00364.79 -> 00366.29] but I could only really do one at a time.
[00368.16 -> 00370.78] And then, you know, testing it was a matter of, like,
[00370.84 -> 00373.14] okay, we've committed it, we're pushing it, running it.
[00373.42 -> 00374.24] Okay, that didn't work.
[00375.02 -> 00376.62] Copy and paste the errors back into Claude,
[00376.78 -> 00379.62] see what's going on, try again, and you'll iterate like that.
[00379.62 -> 00381.96] But still iterate faster than I would have
[00382.56 -> 00383.90] writing a connector on my own,
[00384.06 -> 00386.30] where a connector might have taken me a day before,
[00387.64 -> 00390.20] you know, if it was a decent API, you know,
[00390.36 -> 00390.82] which always was.
[00397.06 -> 00400.82] Anyway, the, I was limited, right? It was Claude.
[00401.02 -> 00402.58] And I didn't feel limited,
[00402.68 -> 00404.36] because I was already working three times faster
[00404.36 -> 00405.18] than I normally would,
[00405.28 -> 00407.14] and I was, you know, pumping out new connectors.
[00408.02 -> 00413.76] But then when I came to start doing, like,
[00414.84 -> 00416.18] and I should clarify,
[00416.44 -> 00418.60] one of my goals was to just do everything,
[00418.84 -> 00420.36] do the whole data stack in Databricks.
[00420.68 -> 00422.28] I don't, I don't like Fivetran.
[00423.34 -> 00424.26] I think it's expensive,
[00424.68 -> 00428.28] and I've had experiences with connectors that don't work,
[00428.38 -> 00431.08] and they, you know, will assist them, they're working,
[00431.14 -> 00432.68] and then you'll dig in, and they'll like,
[00433.06 -> 00435.50] okay, yeah, we had some data loss there,
[00435.60 -> 00436.56] but it wasn't our relationship.
[00437.00 -> 00440.17] But anyway, don't know Fivetran.
[00440.35 -> 00442.09] Wanted to have everything in the same data stack,
[00442.15 -> 00443.43] because I have the technical background
[00443.43 -> 00444.27] to be able to do it.
[00444.27 -> 00448.21] And I know that the Databricks dashboarding
[00448.21 -> 00449.65] is still young,
[00450.47 -> 00452.33] and there's some things you can't do there,
[00452.41 -> 00453.59] like drop-downs, for example.
[00453.75 -> 00455.93] That's one of my biggest misses right now.
[00456.57 -> 00464.26] But anyway, I wanted to do it all in Databricks.
[00464.79 -> 00467.05] I didn't want to manage a whole suite of tools,
[00467.15 -> 00468.91] and I wanted to keep all the costs in one tool.
[00469.85 -> 00473.93] So anyway, when it came time to start doing those dashboards,
[00474.23 -> 00475.39] Claude could not get it.
[00476.13 -> 00478.91] Thankfully, Databricks has its own AI tool, GD,
[00479.35 -> 00480.55] and GD code.
[00480.89 -> 00482.25] They were calling it at the time.
[00482.97 -> 00484.69] That was like a specific part of GD
[00484.69 -> 00486.83] that could do the dashboard development with you
[00486.83 -> 00487.75] and other kinds of development.
[00489.39 -> 00490.71] And that was good,
[00491.29 -> 00493.63] and definitely made it so that I could stay afloat,
[00493.85 -> 00495.51] just being a single, you know,
[00495.57 -> 00497.25] data engineer trying to do all of it.
[00499.63 -> 00501.53] But when Grok Bot came out,
[00502.09 -> 00504.61] one of the things that helped me adopt it
[00504.61 -> 00506.35] was that, you know, I gave it a shot.
[00506.45 -> 00508.33] I was like, hey, can you do this dashboard for me?
[00508.47 -> 00509.65] Like, what credentials do you need
[00509.65 -> 00511.53] to be able to do dashboarding for me?
[00512.26 -> 00513.98] And I got it what it needed,
[00514.72 -> 00515.72] and it just didn't, like,
[00515.86 -> 00519.14] it came out way better than GD code and way faster.
[00520.16 -> 00521.98] And then I was like, all right, well, you know,
[00522.18 -> 00523.68] maybe I'll make a connector bot here, too,
[00523.88 -> 00525.66] and can you do, you know, some connectors?
[00525.88 -> 00528.72] And they were also way faster than Claude and way cheaper.
[00529.56 -> 00534.08] We were maxing out our Claude limits for the month,
[00534.08 -> 00535.84] as soon as we put on the enterprise.
[00539.74 -> 00542.56] And, but Grok Bot, like, yeah,
[00542.72 -> 00544.30] I could do it way cheaper and get,
[00544.74 -> 00547.40] I could spin up not just one, but two connector bots.
[00547.58 -> 00550.72] So very quickly, after just seeing
[00550.72 -> 00552.36] that it could accomplish some of these things
[00552.36 -> 00554.24] without the big, long, you know,
[00554.92 -> 00555.98] spin and the big, long,
[00556.50 -> 00558.12] or big, heavy model or whatever,
[00559.94 -> 00561.48] I started to give it more and more,
[00561.94 -> 00564.02] and I had a project management bot
[00564.02 -> 00566.56] that would look for tasks in Asana.
[00566.68 -> 00568.18] Asana is the ticket management system
[00568.18 -> 00570.40] that they're easier at the company
[00570.40 -> 00571.36] I work for currently.
[00573.40 -> 00579.66] And the PM bot will be onboarding the script
[00579.66 -> 00582.23] because in Asana that are assigned to me,
[00582.27 -> 00584.43] you know, update statuses where needed,
[00584.57 -> 00588.25] and then give me, like, a handoff of, like,
[00588.35 -> 00589.55] hey, here, here's all the things that I think
[00589.55 -> 00591.51] we could hand off to some of your bots on the team,
[00591.67 -> 00593.59] and then I just say go, and we do it.
[00594.31 -> 00597.29] And so very quickly, I ended up with that PM bot.
[00597.29 -> 00599.97] I was kind of orchestrating the task management stuff,
[00600.87 -> 00602.41] which I definitely don't like,
[00602.79 -> 00604.33] and you may see this as a theme.
[00604.77 -> 00606.77] Like, there are some things that the Grok Bots do now
[00606.77 -> 00607.95] that I used to really enjoy
[00607.95 -> 00610.19] that I don't really care to do anymore
[00610.19 -> 00611.65] because it just feels like a waste of time
[00611.65 -> 00613.35] when I know a bot can do it that much faster.
[00613.93 -> 00615.59] But then there are definitely things where it's like,
[00615.71 -> 00617.31] I have always hated doing that.
[00617.69 -> 00618.51] I'm giving that to a bot.
[00619.23 -> 00621.37] And the PM, like, task management stuff
[00621.37 -> 00622.25] is definitely that.
[00622.61 -> 00624.11] Like, I don't...
[00624.52 -> 00625.72] I don't like writing updates
[00625.72 -> 00627.76] in a ticketing system.
[00631.12 -> 00632.58] But, yeah, so PM Bat was managing that,
[00632.74 -> 00637.22] and then I had an architect bot,
[00637.78 -> 00639.88] and the reason I had the architect bot was that,
[00640.00 -> 00641.30] you know, I had a modeling bot,
[00641.46 -> 00644.18] and I had a connector bot to handle the two different aspects
[00644.18 -> 00646.32] of data engineering that I was familiar with.
[00646.98 -> 00649.08] And then I keep up the BI bot,
[00650.58 -> 00652.76] and that was doing the dashboarding for me
[00652.76 -> 00654.24] and doing, like, you know, one-off research.
[00657.22 -> 00662.24] And with the speed that I could do those things,
[00662.54 -> 00666.80] I was taking in tasks way faster than I normally would have.
[00667.26 -> 00672.64] So, you know, normally I'd have a meeting with somebody,
[00672.74 -> 00674.00] and they'd say, hey, this is what I want to do.
[00674.02 -> 00676.16] And I'd say, okay, like, based on my current workload
[00676.16 -> 00678.26] and where this fits on kind of the priority with the team,
[00678.44 -> 00680.64] like, this is something that I think I can do for you
[00680.64 -> 00682.34] this week, or maybe, you know,
[00682.40 -> 00684.14] this is something that I might have to get back to you
[00684.14 -> 00686.16] next week and get you the data.
[00687.86 -> 00690.60] But with Grok Bot, I was just like, oh, yeah, you want that?
[00690.98 -> 00691.02] Sure.
[00691.44 -> 00693.08] And I was, like, typing it up into, you know,
[00693.32 -> 00696.50] a little message to one of my Grok Bots live in the meeting.
[00697.90 -> 00699.04] And then by the end of the meeting,
[00699.04 -> 00701.58] I had something for them, and it was just amazing.
[00701.90 -> 00705.82] And so I was taking on work at an unsustainable pace
[00705.82 -> 00710.10] for one data engineer, or even one data engineer with,
[00710.50 -> 00714.70] you know, who has one connector, you know,
[00714.70 -> 00717.24] Python scriptwriter working for him,
[00717.28 -> 00719.06] and one modeler, and one BI person.
[00720.16 -> 00722.18] And so I was just taking on that work basically
[00722.18 -> 00723.80] as fast as people could think it up.
[00724.92 -> 00728.38] And, you know, the people at the company are hungry
[00728.38 -> 00729.54] for this data.
[00730.02 -> 00733.18] They've been waiting for this kind of reporting for a while.
[00735.30 -> 00737.28] And so I was taking it on, and so, very quickly,
[00737.38 -> 00739.08] I was like, you know what, like, connector bot,
[00739.30 -> 00740.68] can we just have two connector bots?
[00742.58 -> 00744.62] And then BI bot, like, we need,
[00744.98 -> 00746.44] we actually need, like, four of you.
[00746.70 -> 00750.12] So after a week, I had, like, four BI bots,
[00750.28 -> 00751.26] and they were all running in parallel,
[00751.52 -> 00752.96] and they were all working on different projects.
[00753.54 -> 00755.10] And the PM bot was kind of helping with that,
[00755.12 -> 00757.02] but for the technical sprawl,
[00757.92 -> 00760.58] you really need a separate role in software development
[00761.46 -> 00762.46] for an architect.
[00763.28 -> 00764.84] And so I did that with a bot.
[00765.14 -> 00767.26] And so that's where the architect bot came from.
[00767.26 -> 00770.78] And he wasn't necessarily managing tasks
[00770.78 -> 00775.61] with the connector bot and the modeling bot,
[00776.57 -> 00778.97] or, well, the model, or the connector bots
[00779.79 -> 00782.39] and the BI bots, but he was making sure that
[00782.39 -> 00784.79] with all the work going on,
[00785.95 -> 00788.17] he was making sure that the code stayed consistent,
[00788.47 -> 00789.77] you know, that it matched kind of the patterns
[00789.77 -> 00793.37] that we had landed on for the code base in it.
[00793.47 -> 00795.33] It took a minute to train up the architect bot,
[00795.33 -> 00798.87] but I will say, as far as learnings for Dropbox,
[00799.41 -> 00801.73] having an architect bot and a PM bot,
[00801.99 -> 00803.37] and this is going to come as no surprise
[00803.37 -> 00805.47] to anybody who has done software engineering
[00806.37 -> 00810.05] in any, you know, to any degree up to this point.
[00810.53 -> 00813.27] Having a distinct architect bot and a PM bot
[00813.27 -> 00815.13] has been a game changer,
[00815.23 -> 00816.69] and spending the time to get those right
[00816.69 -> 00818.53] has been a game changer for actually, like,
[00818.81 -> 00820.49] getting work done and doing it in a way
[00820.49 -> 00821.11] where I'm not, like,
[00821.19 -> 00823.43] having to constantly go back and manage tech debt
[00824.49 -> 00826.59] and handle things that are, you know,
[00826.91 -> 00829.05] we're making updates and that's breaking other things, you know?
[00830.27 -> 00833.47] So that's one of the main learnings for me so far.
[00834.73 -> 00837.25] Now, where do things go from here?
[00839.17 -> 00842.84] Personally, you know, I try to avoid being, like,
[00842.96 -> 00845.98] a fanboy of, like, one specific tool,
[00846.60 -> 00848.24] but there are a couple that I will,
[00849.04 -> 00851.08] that are my go-tos every time right now,
[00851.62 -> 00852.84] and, you know, obviously,
[00852.88 -> 00854.56] reserve the right to change in the future, of course,
[00854.92 -> 00857.90] because people are always pushing out new exciting things,
[00858.14 -> 00858.94] especially right now,
[00859.64 -> 00862.22] but the two that I will bet on every time right now
[00862.22 -> 00865.20] are Databricks, because, you know,
[00865.26 -> 00866.50] with all the AI, you might think
[00867.38 -> 00871.80] you don't need a data warehouse anymore,
[00871.92 -> 00873.10] you don't need a BI tool, like,
[00873.20 -> 00876.00] because the bots can just do it, right?
[00876.10 -> 00877.34] They can just tell you what you want to know,
[00877.52 -> 00878.30] but the problem is,
[00879.40 -> 00881.32] you have to connect those bots every time
[00881.32 -> 00884.29] to figure out, you know, those answers,
[00884.83 -> 00886.35] but then the other thing is
[00889.74 -> 00892.24] when there are specific definitions at play,
[00892.30 -> 00894.08] I'm like, this is how we calculate net revenue.
[00894.44 -> 00897.68] We, you know, subtract the landed cost of the good,
[00899.02 -> 00904.93] and then we subtract any refunds and returns in the period
[00904.93 -> 00906.37] versus, you know, when we look at it
[00906.37 -> 00907.51] for the lifetime of the product,
[00907.75 -> 00911.43] we do the returns netted out against the original sale,
[00911.67 -> 00913.37] and so you have, you know,
[00913.37 -> 00915.19] numbers that are kind of changing back in time
[00915.19 -> 00916.65] on returns that are happening now,
[00917.65 -> 00919.01] and so there's, you know, things like that
[00919.01 -> 00920.74] that are like definitions,
[00921.26 -> 00923.28] things that you have coded into a data warehouse
[00923.28 -> 00926.02] that you don't want to have to coach your AIs
[00926.02 -> 00928.12] through every time you do an inquiry,
[00930.48 -> 00933.24] which kind of gets into this concept of like a company brain,
[00933.34 -> 00934.46] which is something that I know is,
[00934.46 -> 00937.50] is a topic for people right now,
[00939.56 -> 00942.04] but, so data warehouse is kind of like
[00942.04 -> 00945.06] step one of the company brain, you know,
[00945.38 -> 00947.36] something where when you ask this question,
[00947.74 -> 00949.46] you want to ask it and know that it's going to give you
[00949.46 -> 00950.80] the same answer that it's giving your neighbor,
[00951.42 -> 00953.16] and when you don't have a data warehouse,
[00953.66 -> 00954.90] you can't be as sure of that,
[00955.42 -> 00957.20] and so data warehouse is still important,
[00957.28 -> 00958.88] and if you're going to have a data warehouse,
[00959.22 -> 00960.82] I highly, highly recommend Databricks.
[00961.56 -> 00964.62] It's just really scalable, really flexible.
[00965.36 -> 00966.88] They're always coming out with new features,
[00966.88 -> 00968.54] which is probably the biggest thing for me
[00968.54 -> 00970.84] between Databricks and Grok Bot
[00970.84 -> 00972.78] is just that they're always coming out with new features,
[00972.88 -> 00974.14] they're always making it more useful,
[00974.34 -> 00976.48] and the features that they're landing make sense.
[00977.22 -> 00978.90] It's not just silly, stupid stuff
[00978.90 -> 00982.64] like you see with some of the SaaS stuff going on there,
[00982.78 -> 00985.88] and even, I mean, Databricks itself and Grok Bot,
[00986.14 -> 00988.58] like all the AI tools, like they're usage-based,
[00989.28 -> 00990.92] which is another feature that I like,
[00991.02 -> 00992.58] like it's not a subscription.
[00992.92 -> 00996.78] Just to have it, you know,
[00997.26 -> 00999.10] you're getting charged based on how much you're using,
[00999.10 -> 01001.14] and so it's really up to you
[01001.85 -> 01003.31] what's worth it and what's not,
[01006.26 -> 01008.54] as far as the projects that you're going to take on
[01008.54 -> 01009.74] and the compute that you're going to use.
[01011.51 -> 01012.99] So, really love Databricks.
[01013.27 -> 01014.63] The other one, of course, is Rockbot.
[01014.95 -> 01017.53] I will bet on Rockbot pretty much every time right now.
[01018.31 -> 01023.58] You know, people still like Clod and other tools,
[01025.74 -> 01027.44] and yeah, I think they're useful,
[01027.68 -> 01028.70] but honestly, for me,
[01028.70 -> 01034.76] my plan is to, assuming it works with the user agreement,
[01034.98 -> 01039.76] is to download Clod Cowork on my Rockbot's VM
[01040.72 -> 01042.28] so that they can just, you know,
[01042.82 -> 01044.42] there's a best practice right now of like,
[01044.56 -> 01047.56] hey, like, you know, the models will self-assure,
[01047.90 -> 01050.10] and so you want to compare their output
[01050.10 -> 01051.46] against another model's output.
[01052.42 -> 01055.48] I just want to give Clod to Rockbot and say,
[01055.66 -> 01057.44] hey, anytime you're going to submit a PR,
[01058.08 -> 01060.28] check it against Clod first and get feedback,
[01060.48 -> 01062.84] and then iterate that way before you submit the PR,
[01063.24 -> 01066.02] and then, you know, there's less back and forth
[01066.02 -> 01067.94] with that bot and the architect bot.
[01069.86 -> 01072.06] You know, it's got a second opinion already
[01072.06 -> 01074.60] before it's even submitted the PR to go from dev to stage.
[01078.12 -> 01079.72] So that's one place to go from here,
[01079.80 -> 01081.58] but then the other place for me, honestly,
[01081.76 -> 01087.02] is just I'm looking for how I can set up my architect bot
[01087.02 -> 01088.68] to be able to deploy,
[01088.68 -> 01090.32] and I think I know what I need to do there.
[01090.52 -> 01091.98] It feels a little bit scary,
[01092.64 -> 01096.06] but I've gotten to the point on what I've heard
[01096.06 -> 01097.24] called the trust ladder,
[01098.40 -> 01100.23] where I trust the bots,
[01100.37 -> 01101.59] I trust the work that they're doing,
[01101.91 -> 01104.59] and at this point, the annoyance for me
[01104.59 -> 01106.59] is having to tell them yes or no,
[01106.59 -> 01108.05] like, well, it's not even yes or no,
[01108.13 -> 01110.13] it's just having to tell them yes all the time and go.
[01110.89 -> 01113.29] I'd like to just give them the ability to just do it.
[01114.14 -> 01117.75] For example, when I have outages,
[01118.85 -> 01120.51] credentials expired unexpectedly,
[01121.29 -> 01126.32] or an API got an update that wasn't well advertised,
[01128.10 -> 01130.90] which I hope to be able to manage better in the future too,
[01131.28 -> 01137.25] and have connector bots do some proactive work there.
[01137.65 -> 01141.20] But when I have those kind of outages
[01141.20 -> 01144.64] and I have my morning Slack update that comes up,
[01144.64 -> 01147.24] and that's automated, that's not a bot running that,
[01147.34 -> 01150.04] that's like a cron job that just runs and checks
[01150.04 -> 01151.18] the status of all my pipelines,
[01151.86 -> 01153.50] you don't need to have a bot do everything.
[01153.70 -> 01154.88] There's some things that can be automated
[01154.88 -> 01156.81] that don't need to be a bot.
[01157.19 -> 01160.37] But whenever that status comes out,
[01160.65 -> 01163.69] I'd like for the architect bot to just hop on
[01163.69 -> 01165.61] before I even get on in the morning and say,
[01165.69 -> 01166.75] oh, looks like this is out,
[01167.47 -> 01169.05] we need to draft a message to so-and-so
[01169.05 -> 01170.25] to ask for refresh credentials,
[01170.69 -> 01171.83] or oh, looks like this is out,
[01171.93 -> 01174.57] let's look up the API documentation.
[01174.57 -> 01175.55] Yep, there was an update.
[01175.73 -> 01176.87] Let's go ahead and write that update,
[01177.51 -> 01179.71] do the whole PR review process and push it
[01179.71 -> 01183.83] and rerun that connector before I even log in in the morning.
[01183.99 -> 01187.13] And then I can just check Slack and see it's all done.
[01188.66 -> 01190.80] So that's where I'm looking to go.
[01191.48 -> 01192.80] And one of the main reasons is I'm looking
[01192.80 -> 01194.72] to hand off my entire job to this team.
[01196.12 -> 01199.36] Again, I'm at the point where I've loved
[01199.36 -> 01201.52] what I've done in my career
[01201.52 -> 01204.48] and the joy of solving problems,
[01205.60 -> 01207.26] but I'm scaling that.
[01207.52 -> 01211.22] I'm moving up a layer and abstracting that into,
[01211.40 -> 01212.76] yeah, I don't need to be the one
[01213.75 -> 01215.53] manually solving these problems anymore.
[01215.77 -> 01217.65] There is a faster, more efficient way.
[01218.33 -> 01220.29] And I have the experience where I can say,
[01220.49 -> 01222.13] nope, this is the right way to do it.
[01222.21 -> 01223.75] These are the standards that we're gonna adopt
[01223.75 -> 01227.35] because these save us from shooting ourself
[01227.35 -> 01229.75] in the foot on other things
[01230.81 -> 01232.81] so that we can really be as scalable
[01232.81 -> 01234.71] as the tool is, as Databricks is,
[01235.68 -> 01238.04] and not create a whole bunch of cruft ourselves.
[01241.59 -> 01244.43] And so, yeah, I'm at the point
[01244.43 -> 01246.25] where I don't need to be writing that code anymore.
[01246.43 -> 01248.41] I don't need to be making those dashboards.
[01249.53 -> 01252.07] And I definitely, definitely don't need to be writing updates
[01252.07 -> 01256.25] on my job tickets in Asana or Jira or whatever.
[01259.28 -> 01261.02] And with handing that off,
[01261.27 -> 01264.05] my plan and the plan that I've been talking about
[01264.05 -> 01266.43] with my managers is, yeah, not just to manage,
[01266.59 -> 01269.23] but to continue to expand into like,
[01269.23 -> 01271.77] hey, how do we solve more of these problems with AI?
[01271.97 -> 01275.65] How do we implement these little bots
[01275.65 -> 01278.29] or these teams that can automate processes for us
[01278.29 -> 01283.34] that are honestly requiring people currently
[01283.34 -> 01286.18] to do the most tedious tasks you can imagine
[01286.18 -> 01288.96] of just copying and pasting stuff from emails
[01288.96 -> 01290.72] to spreadsheets or spreadsheets to emails
[01290.72 -> 01292.50] all day long?
[01292.76 -> 01294.26] Like, how can we automate some of that stuff
[01294.26 -> 01295.64] and let the people do the people work
[01295.64 -> 01298.50] and scale the business without necessarily scaling
[01299.68 -> 01300.64] the overhead?
[01301.48 -> 01303.80] So, anyway, that's just my thoughts
[01303.80 -> 01305.24] on Grok Bot right now.
[01305.82 -> 01306.98] I've really enjoyed it.
[01307.00 -> 01308.82] I really recommend checking it out.
[01309.72 -> 01314.20] And, yeah, I hope to have another update like this soon
[01314.20 -> 01315.52] when I've made those changes
[01315.52 -> 01317.24] and have something more useful.
[01317.48 -> 01318.46] But if you've got questions
[01318.46 -> 01320.90] or want to see my implementation
[01320.90 -> 01325.56] or want to pick my brain on how that implementation
[01325.56 -> 01328.80] might work in your setting or in your environment
[01328.80 -> 01330.14] or how to set up that environment
[01330.14 -> 01331.62] to really be able to trust your bots,
[01332.40 -> 01334.02] I'd love to talk more about those things.
[01334.36 -> 01335.94] So I'll talk to you later.
[01336.66 -> 01338.28] Plenty of morning drives, so I'll see you then.
