perf_data = {
    1:22,
    2:11,
    3:12,
    4:3,
    5:3,
    6:7,
    7:4,
    8:2,
    9:1,
    10:3,
    11:5,
    12:1,
    14:4,
    15:2,
    16:1,
    17:3,
    18:1,
    19:4,
    21:1,
    22:4,
    24:1,
    25:1,
    26:1,
    27:2,
    29:1,
    31:1,
    32:1,
    33:1,
    36:1,
    38:1,
    40:1,
    52:1,
}

n = sum([freq for freq in perf_data.values()])
scores = sum([key*value for key, value in perf_data.items()])
performance = scores/n
print(f'Average Performance Over {n} Games: {performance}')
