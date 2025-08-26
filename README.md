# DeepRL plays Flappy Bird 

A policy optimization network that learns to play Flappy Bird, using the [Gymnasium](https://gymnasium.farama.org/) [environment](https://github.com/robertoschiavone/flappy-bird-env) and [deep differentiable logic gate networks](https://github.com/Felix-Petersen/difflogic) for function approximation. bongocat assets from [here](https://github.com/kuroni/bongocat-osu/tree/master).

## Flappy Bird Reference

| Medal | Score |
|-|-|
| Bronze Medal | 10 Points |
| Silver Medal | 20 Points |
| Gold Medal | 30 Points |
| Platinum Medal | 40 Points |

## Dev Notes

To play, run the following command in the `game` directory:

`python3 -m http.server`

and open `http://localhost:8000/rl.html` in your browser.

## Blurb

I created a policy optimization agent to play the #1 mobile game of 2014, Flappy Bird! The agent (represented by the cat) learns to adjust its behavior to get a higher score.

The catch? Instead of using neural networks (so blasé), I used a technique introduced in 2022 called deep differentiable logic gate networks. Each node in the network learns to choose a logic gate to improve performance. This leads to slower learning, but after you "compile" the network you get insanely fast inference, which is great for edge deployments. Here the cat decides whether to tap or not in x ms, and achieves an average score of y. I show part of the final compiled net (the brain of the cat) at the end. 

The source can be found here: https://github.com/JackHanke/flappy


