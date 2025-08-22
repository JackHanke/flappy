import numpy as np
import random
import torch

class RandomAgent:
    def __init__(self, prob_of_action=0.1):
        self.prob_of_action = prob_of_action

    def choose_action(self, observation: np.array):
        if random.random() < self.prob_of_action:
            return 1
        return 0


    def update(self):
        return


class POAgent:
    def __init__(self, prob_of_action=0.1):
        pass

    def choose_action(self, observation: np.array):
        return


    def update(self):
        return