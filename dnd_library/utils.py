def get_level_by_experience(experience):
    if experience < 1000:
        return 1
    elif experience < 2250:
        return 2
    elif experience < 3750:
        return 3
    elif experience < 5500:
        return 4
    elif experience < 7500:
        return 5
    elif experience < 10000:
        return 6
    elif experience < 13000:
        return 7
    elif experience < 16500:
        return 8
    elif experience < 20500:
        return 9
    elif experience < 26000:
        return 10
    elif experience < 32000:
        return 11
    elif experience < 39000:
        return 12
    elif experience < 47000:
        return 13
    elif experience < 57000:
        return 14
    elif experience < 69000:
        return 15
    elif experience < 83000:
        return 16
    elif experience < 99000:
        return 17
    elif experience < 119000:
        return 18
    elif experience < 143000:
        return 19
    elif experience < 175000:
        return 20
    elif experience < 210000:
        return 21
    elif experience < 255000:
        return 22
    elif experience < 310000:
        return 23
    elif experience < 375000:
        return 24
    elif experience < 450000:
        return 25
    elif experience < 550000:
        return 26
    elif experience < 675000:
        return 27
    elif experience < 825000:
        return 28
    elif experience < 1000000:
        return 29
    else:
        return 30
