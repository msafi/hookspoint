---
title: The Appearance of Satoshi Nakamoto
date: 2020-10-19
tags:
  - bitcoin-history
layout: layouts/post.11ty.js
---

Satoshi got the idea for a decentralized form of electronic
money sometime around mid-2007. He spent the next year and a
half coding it{% ref 'year-and-half' %} before he ever
mentioned it to anybody.

By the end of 2008, he was confident enough in his work to
talk about it publicly. He posted his first public message
on October 31st of 2008 to a mailing list for
cryptographers. In it, he wrote:

> I've been working on a new electronic cash system that's
> fully peer-to-peer, with no trusted third party.
>
> The paper is available at:
> <http://www.bitcoin.org/bitcoin.pdf>

Along with the link to the bitcoin whitepaper, he also gave
some more details of his invention. This was two months
before Satoshi released the Bitcoin software.

His message and his whitepaper lacked any hints of political
motivation, but the response he generated was largely
political with a libertarian bent.

This soon induced Satoshi to reveal some of his own
political motives. When someone wrote "You will not find a
solution to political problems in cryptography," Satoshi
responded:

> Yes, but we can win a major battle in the arms race and
> gain a new territory of freedom for several years.
>
> Governments are good at cutting off the heads of a
> centrally controlled networks, but pure P2P networks seem
> to be holding their own.{% ref 'territory-of-freedom' %}

The critique kept coming but it was mostly shallow and
discouraging. The list of objections included, among other
things, statements like this will not scale, it would be
susceptible to a government attack, will Jews be blamed if
bitcoin fails?{% ref 'jews' %} and zombie farms would take
over the network!

Satoshi took it in stride. He defended his proposal
cordially and patiently.

After a few days of this, however, the list moderator
intervened. "I'm a rabid libertarian myself", he wrote, "but
this isn't the rabid libertarian mailing list. Please stick
to discussing either the protocols themselves or their
direct practicality."{% ref "rabid-libertarian" %}

Luckily, there was one member, Hal Finney, who was deeply
curious about the protocol itself. Hal's interest in
decentralized money predated even bitcoin. So he studied
Satoshi's proposal closely before
responding{% ref 'hals-first-message' %}. His excitement
showed. He praised the proposal as "a very promising idea."
In that first message, Hal unexpectedly predicted several
major turning points in the future of bitcoin. He described
Bitcoin as "more analogous to gold than to fiat currencies,"
and predicted the Lightning Network, writing "there have
also been proposals for building light-weight anonymous
payment schemes on top of heavy-weight non-anonymous
systems, so Bitcoin could be leveraged to allow for
anonymity even beyond the mechanisms discussed in the
paper."

Hal's message helped steer the discussion towards the
practicality of bitcoin. But skepticism remained high, and
for good reason. Nobody has ever been able to design a
global datastore without relying on a central authority. Yet
here's this unfamiliar name with a 9-page document claiming
to have done just that.

So the questioning continued. How will the database be
updated across participants? Will identities be tracked? How
do users prove ownership of coins? Etc.

It became clear that this could go on and on, and Satoshi
knew it when he wrote "I'll try and hurry up and release the
sourcecode as soon as possible to serve as a reference to
help clear up all these implementation questions."

Shortly after that, the moderator requested that bitcoin
discussion be stopped until there is a more formal
description of the protocol or an implementation of it.

It would be another two months before Satoshi would post
again on the list, this time with the title "Bitcoin v0.1
released" and another chapter of the Bitcoin story would
begin.

<!--
references:
  - jews: https://www.metzdowd.com/pipermail/cryptography/2008-November/014819.html
  - hals-first-message: https://www.metzdowd.com/pipermail/cryptography/2008-November/014827.html
  - rabid-libertarian: https://www.metzdowd.com/pipermail/cryptography/2008-November/014824.html
  - territory-of-freedom: https://www.metzdowd.com/pipermail/cryptography/2008-November/014823.html
  - year-and-half: https://www.metzdowd.com/pipermail/cryptography/2008-November/014863.html
  - scammer: https://www.ofnumbers.com/2018/10/01/interview-with-ray-dillinger/
-->
