import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import { breadcrumbs } from '../links';
import parse from 'html-react-parser';

export default function BlogArticlePage() {
  //Get reques to query blog article from backend
  const title = "Test lol";
  return(
    <main id="main">
      <BreadCrumbs crumbs={[breadcrumbs.home, breadcrumbs.blog, {label: title}]} />
      <div class="blogpage-inner">
        {
          parse(article)
        }
      </div>
    </main>
  )
}

const article=`
<article class="article-layout post tag-policy ">

<header class="article-layout-header">
<h1 class="article-layout-title">SpaceX</h1>
</header>

<figure class="article-layout-image" align="center">
<img src="https://i.ibb.co/CBrMbFB/crs20-streak1.jpg" class="img-fluid" alt="crs20-streak1" border="0">
</figure>

<section class="article-layout-content">
<div class="post-content">
<p><em>
  Have you ever looked at the night sky and wondered; What is beyond our Earth? Is it endless nothingness ? or is there something or rather someone far far away that we don’t even know exist? Are we born just to make the soil richer when we die? Is Earth the only accommodation we have? These questions are confusing humans for centuries and it looks like no one has really made an attempt to answer them. Well even though these questions remain unanswered, Hollywood can’t stop making a business out of them of course; releasing movies after movies with aliens who turn a blind eye to everything except the USA.


</em></p><hr>
<h3 id="the-story">Falcon1</h3>
<p>It took a South African millionaire(now a billionaire and Twitter Kingpin) to put an end to this and take matters into his own hands. Elon Musk, in that day and age, was an entrepreneur and CEO of Paypal. He had just narrowly escaped from malaria(back when a bat didn’t cause all the troubles) and wished to fulfill his childhood dream of visiting Mars. Elon checked the NASA website and was surprised to see no mention of going to Mars anywhere. He then announced Code Red(Pun intended) and made it his personal mission to colonize Mars and take
space transportation to a whole new level. He visited Russia to buy rockets but came
back empty-handed (with mittens of course as we know how cold Russia can get) as he
failed to find rockets for an affordable price. On the plane ride back he realized he
himself could start a company to build affordable rockets. This was the birth of SpaceX.
By applying vertical integration; using cheap commercial off-the-shelf components
whenever possible and adopting the modular approach of modern software engineering,
Musk believed that his company could significantly cut launch price. To fulfill this dream
he began to search for rocket engineers and came across Mr. Tom Mueller( No he is not
a footballer) and invited him to become his business partner. Tom Mueller agreed to join
and SpaceX was first headquartered in a warehouse in El Segundo, California. The
beginning of the Company was hard and not everyone was appreciative of Elon’s plan.
By 2005 SpaceX had around 160 employees almost all of which were interviewed by
Musk before joining. In one of his press statements, Elon stated that the goal of his
company was to ease the cost and improve the reliability of access to space, by a factor
of ten. This was just the beginning of the legacy Mr. Musk was going to lay. These are
the projects ( in sequential order) SpaceX has created
</p><p>Even though SpaceX was founded in 2002 the first launch took place in 2006 (Yes as
long as an Engineering Degree). It was the launch of the Falcon -1 (Americans are still
wondering why this wasn’t called Eagle-1) which was a rocket capable of putting a
metric ton (1000 kg) into low Earth orbit. It was one of the only orbital launch vehicles
which was developed by private funding. The total development cost of Falcon 1 was
approximately US$100 million(Yes as much as a Hollywood Alien Invasion sci-fi movie)
The first launch of Falcon -1 was successful; well, for the first 26 seconds at least. After
that, the rocket rapidly pitched over and ultimately crashed onto a dead reef about 250
feet from the launch site. This was a major setback for Musk and his company. Leaving
this failure behind, SpaceX worked for another year and were all set for the second
launch in 2007. This time the rocket performed well in the first stage burn but due to the
Sloshing of propellant, the rocket couldn’t enter orbit, and hence the mission was a
failure. They say “Third time is the charm” but it was not so in SpaceX’s case as the
third launch made in 2008 also was a failure. At this point, Elon received a lot of
criticism and everything was falling apart for his company. The funds were over and
Elon had to make some brave calls to even try to make the fourth launch happen. If this
fourth launch proved to be a failure it was the end of SpaceX. History took place on 28
September 2008. The fourth launch was a success and the launch vehicle was able to
deliver the non-functional payload spacecraft into low Earth orbit.
</p>

<p>With the successful launch of Falcon-1, SpaceX received a 1.2 billion dollar(which is
1/127 of Elon’s current net worth) contract from NASA to deliver cargo to the ISS with a
minimum of 12 flights. Space X then accelerated the development of its next launch
vehicle the “Falcon-9”.Falcon-9 was a two-stage rocket with 9 Merlin engines on its first
stage and one vacuum optimized merlin on its second stage. The first-ever Falcon-9
was called the Falcon-9 version 1 and had a successful test flight on 4th June 2010.
SpaceX also tried to recover the first stage by parachuting it in the ocean but it burned
during open re-entry before the parachutes were even deployed. In late 2011 Space X
decided that it would remove the parachutes and go with a propulsively powered
descent approach. From 2010-2015 SpaceX conducted 19 flights into orbit, out of which
only one failed. On 22nd December 2015, SpaceX successfully launched Orbcomm into
orbit and landed its booster stage on the ground pad in California. History was created
that day as this was the first vertical landing of an orbital class rocket. Throughout the
years the Falcon-9 design was refined several times with many versions. SpaceX
strapped three Falcon-9 rockets together which made it a heavy-lift rocket known as
Falcon Heavy. On 6th February 2018, Falcon Heavy was launched having a Tesla
roadster and a dummy starman as payload sending them into a heliocentric orbit around
the Sun. The two booster stages landed on the ground pads but the core stage failed to
land on the drone ship. The Falcon Heavy was further launched several times and had
a high success rate.</p>

<p>Due to the success and reliability of the SpaceX Heavy vehicle; NASA announced that
SpaceX would be responsible for crew transportation to the ISS and would receive 2.6
billion dollars under this contract. Upon receiving this contract, SpaceX began to work
on its “Crew Dragon”(a very good name for a Chinese spacecraft) to meet the NASA
standards for sending astronauts to the ISS. On May 30th, 2020, SpaceX successfully
launched NASA astronauts Douglas Hurley and Robert Henkin into orbit, making
SpaceX the first private company to send astronauts to the ISS. Despite all this, Elon
did not forget his goal of sending humans to Mars and starting a colony there. Hence
SpaceX began the development of its interplanetary spacecraft Starship whose
construction was going on since 2007. The construction in Texas is in full swing and an
orbital flight of Starship is expected soon.
</p>
<p>“It isn’t Rocket Science!” is a phrase
commonly used to denote a task that isn’t very hard to accomplish. But in the case of
SpaceX, it is literally Rocket Science! From an idea of starting a rocket company in an
airplane to making the most capable flying rocket, SpaceX has come a long way.
SpaceX is a great example of how extreme engineering can make anything possible.</p> <hr><br>
</div>
</section>
</article>`