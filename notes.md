---
header-includes:
  <link href="twelve-days.css" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
  <link href="custom-styles.css" rel="stylesheet" />
---

A little while ago, I came across a description of an identity about
elements of Pascal's triangle.  The identity seems to sometimes be
called the "hockey-stick identity", and sometimes the "Christmas
stocking identity".  It says, roughly speaking, that the sum down a
diagonal of Pascal's triangle is equal to the entry in the next row
and one "across" diagonally.

To give a concrete example:

- - - - - - - - -
        1
      1   1
    1   2   1
  1   3   3   1
1   4   6   4   1
- - - - - - - - -

<script src="highlight-table.js"></script>

Here, the blue diagonal entries, 1, 2, and 3, add up to the yellow
entry, 6.

In general, suppose _n_ and _r_ are integers, with _n_ ≥ _r_ ≥ 0.
Then, using the notation _C_(_m_, _k_) for binomial coefficients, the
theorem says that

<div style="text-align: center">
_C_(_r_, _r_) + _C_(_r_+1, _r_) + _C_(_r_+2, _r_) + ⋯ + _C_(_n_, _r_)
= _C_(_n_+1, _r_+1).
</div>

This example is

<div style="text-align: center">
_C_(1, 1) + _C_(2, 1) + _C_(3, 1) = _C_(4, 2),
</div>

and for small _r_, the identity can be loosely paraphrased as

* (_r_ = 0) adding up ones gives counting numbers;
* (_r_ = 1) adding up counting numbers gives triangular numbers;
* (_r_ = 2) adding up triangular numbers gives pyramid numbers.

The [Wikipedia
page](https://en.wikipedia.org/wiki/Hockey-stick_identity) has some
proofs.

Knowing that this identity had a name, I was reminded of two examples
I had encountered.


## The twelve days of Christmas

The first example is particularly apt given the "Christmas stocking"
name.  The task is to count the total number of gifts in the [Twelve
Days of Christmas
song](https://en.wikipedia.org/wiki/The_Twelve_Days_of_Christmas_(song)).

We can start with looking at the first few days:

* On day 1, there is **1** gift: 1 (partridge in a pear tree).
* On day 2, there are **3** gifts: 2 (turtle doves) + 1 (partridge).
* On day 3, there are **6** gifts: 3 (French hens) + 2 (turtle doves) + 1 (partridge).

Generalising this, on day _n_, the number of presents is the
<i>n</i>th triangular number, which is _C_(_n_+1, 2).

To find the total number of presents over the twelve days of the song,
we want the sum of the first twelve triangular numbers:

<div style="text-align: center">
_C_(2, 2) + _C_(3, 2) + _C_(4, 2) + ⋯ + _C_(13, 2).
</div>

By the Christmas stocking identity, this is _C_(14, 3) = 364, which we
can verify directly.

### Explicit bijection

With combinatorial identities like this, it is interesting to see
whether we can find an actual bijection.  In this case, we want a
bijection between these two sets:

* the set of 364 individual gifts received over the twelve days of
  Christmas, and
* the set of 364 choices of three things from a collection of
  fourteen.

For the second set, we can stack fourteen rows in a column, and
imagine choosing three of them.  Then a particular individual present
can be identified as follows.  The top chosen row determines the day;
the middle chosen row tells us the kind of gift; and the bottom chosen
row tells us the individual instance of that kind of gift on that day.

Below is an interactive illustration which lets you choose three
things from fourteen by moving three sliders up and down.  The
fourteen rows are labelled such that the windows in the sliders
combine to reveal each of the 364 individual presents.  This does mean
that each row of this table seems to be off by one day, but if you
read what's shown through the windows, everything works.

<div id="twelve-days">
<div id="labels"></div>
<div id="sliders">
<div id="choose-day" tabindex="0" data-slider-idx="0">
<div class="intro-wrapper"><p class="intro">On the</p></div>
<div class="window"></div>
<div class="intro-wrapper">
<p class="intro">day, my true love gave to me</p>
</div>
</div>
<div id="choose-kind" tabindex="0" data-slider-idx="1">
<div class="intro"></div>
<div class="window"></div>
<div class="outro"></div>
</div>
<div id="choose-which" tabindex="0" data-slider-idx="2">
<div class="intro-wrapper"><p class="intro">Count them....</p></div>
<div class="window"></div>
<div class="outro"></div>
</div>
</div>
</div>
<script src="twelve-days.js"></script>


## Juggling show "Pyramid"

The other example is from a cool juggling show I saw at the 2024
European Juggling Convention.  [The show is called
"Pyramid"](https://www.jugglingdom.com/shows/pyramid-show), and the
performer, Domenyk La Terra, did various elegant and skillful things
with different numbers of balls, juggling them and balancing them on
and rolling them along beams.  I thought this was a very good show —
worth seeing if you get the chance.

A big theme of the show (as you can guess from its title) is
_pyramids_, and he works with different sizes of pyramids of juggling
balls:

* Tiny (1-layer) pyramid: 1 ball = first triangular number = 1 =
  _C_(3, 3).
* Small (2-layer) pyramid: 4 balls = sum of first two triangular
  numbers = 1 + 3 = _C_(4, 3).
* Medium (3-layer) pyramid: 10 balls = sum of first three triangular
  numbers = 1 + 3 + 6 = _C_(5, 3).
* Big (4-layer) pyramid: 20 balls = sum of first four triangular
  numbers = 1 + 3 + 6 + 10 = _C_(6, 3).

<figure style="text-align: center; margin-top: 1.5rem; margin-bottom: 2rem;">
<img src="four-pyramids.jpg" style="width: 75%; margin-top: 1rem;"
 alt="Performer Domenyk La Terra standing next to four tall plinths, each with a different number of juggling balls arranged in a pyramid on top of it.">
<figcaption>Image: Domenyk La Terra</figcaption>
</figure>

One part (and this is in the trailer, so is no more of a spoiler than
if you watched the video on [the performer's
site](https://www.jugglingdom.com/shows/pyramid-show)) involves
combining these four pyramids of balls into one very big (5-layer)
pyramid consisting of 35 balls.

<figure style="text-align: center; margin-top: 1.5rem; margin-bottom: 2rem;">
<img src="one-big-pyramid.jpg" style="width: 75%; margin-top: 1rem;"
 alt="Performer Domenyk La Terra standing behind a single tall plinth, with 35 juggling balls arranged in a single pyramid on top of it.">
<figcaption>Image: Domenyk La Terra</figcaption>
</figure>

My immediate thought when I saw this was that it was just a pleasing
cosmic coincidence, but in fact it's another instance of the
hockey-stick identity, with one small extra step.  By the hockey-stick
identity, we can find the sum of the first four pyramid numbers (i.e.,
the total number of balls in the four pyramids) as follows:

<div style="text-align: center">
_C_(3, 3) + _C_(4, 3) + _C_(5, 3) + _C_(6, 3) = _C_(7, 4) = 35.
</div>

But also, _C_(7, 4) = _C_(7, 3), because choosing four things you want
from a tray of seven things is the same as choosing which three to
leave on the tray, and _C_(7, 3) is the fifth pyramid number.  So the
sum of the first four pyramid numbers is the fifth pyramid number.

This observation will extend so that, for example,

<p style="text-align: left; padding-left: 3rem; margin-bottom: 0rem;">_C_(4, 4) + _C_(5, 4) + _C_(6, 4) + _C_(7, 4) + _C_(8, 4)</p>
<p style="text-align: right; padding-right: 3rem;">= _C_(9, 5) = _C_(9, 4),</p>
</div>

which is saying that the first five hyper-pyramid numbers (if that is
indeed their name) sum to the sixth:

<div style="text-align: center">
1 + 5 + 15 + 35 + 70 = 126.
</div>

Going in the other direction, the sum of the first three triangular
numbers is the fourth triangular number: 1 + 3 + 6 = 10, and the sum
of the first two counting numbers is the third counting number: 1 + 2
= 3.  We could even say that the sum of the first one one is the
second one: 1 = 1.
