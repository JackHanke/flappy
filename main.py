import gymnasium as gym
import flappy_bird_env # noqa

from model import RandomAgent

env = gym.make("FlappyBird-v0", render_mode='human')

agent = RandomAgent(prob_of_action=0.1)

# Reset environment to start a new episode
observation, info = env.reset()

episode_over = False
total_reward = 0

while not episode_over:
    action = agent.choose_action(observation=observation)

    # Take the action and see what happens
    observation, reward, terminated, truncated, info = env.step(action)

    # 
    agent.update()

    total_reward += reward
    episode_over = terminated or truncated

print(f"Episode finished! Total reward: {total_reward}")
env.close()

