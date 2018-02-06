from core.utils.enum import Enum

DEFAULT_STATS_VALUE = 10
BASE_DEFENCE_VALUE = 10


class CreatureSize(Enum):
    SMALL = 'small'
    MEDIUM = 'medium'
    BIG = 'big'
    GIGANTIC = 'gigantic'


class CreatureVision(Enum):
    NORMAL_VISION = 'normal'
    LOW_LIGHT_VISION = 'low-light'
    DARK_VISION = 'dark'


class HeroStats(Enum):
    STRENGTH = 'strength'
    DEXTERITY = 'dexterity'
    CONSTITUTION = 'constitution'
    INTELLIGENCE = 'intelligence'
    WISDOM = 'wisdom'
    CHARISMA = 'charisma'


class HeroSkills(Enum):
    ACROBATICS = 'acrobatics'
    ARCANA = 'arcana'
    ATHLETICS = 'athletics'
    BLUFF = 'bluff'
    DIPLOMACY = 'diplomacy'
    DUNGEONEERING = 'dungeoneering'
    ENDURANCE = 'endurance'
    HEAL = 'heal'
    HISTORY = 'history'
    INSIGHT = 'insight'
    INTIMIDATE = 'intimidate'
    NATURE = 'nature'
    PERCEPTION = 'perception'
    RELIGION = 'religion'
    STEALTH = 'stealth'
    STREETWISE = 'streetwise'
    THIEVERY = 'thievery'


class Languages(Enum):
    ABYSSAL = "abyssal"
    COMMON = "common"
    DRACONIC = "draconic"
    DWARVEN = "dwarven"
    ELVEN = "elven"
    DEEP = "deep"
    SPEECH = "speech"
    GIANT = "giant"
    GOBLIN = "goblin"
    PRIMORDIAL = "primordial"
    SUPERNAL = "supernal"


class SpellUsageType(Enum):
    AT_WILL = 'at-will'
    DAILY = 'daily'
    ENCOUNTER = 'encounter'


class ActionType(Enum):
    STANDARD = 'standard'
    MOVE = 'move'
    MINOR = 'minor'
    OPPORTUNITY = 'opportunity'
    INTERRUPT = 'interrupt'
    FREE = 'free'
    NO_ACTION = 'no action'
    EXCEPTIONS = 'exceptions'


class RangeType(Enum):
    WEAPON = 'weapon'
    TOUCH = 'touch'
    RANGED = 'ranged'
    CLOSE_BURST = 'close_burst'
    BLAST = 'blast'
    AREA_BURST = 'area_burst'
    WALL = 'wall'
    PERSONAL = 'personal'


class SpellType(Enum):
    ATTACK = 'attack'
    RITUAL = 'ritual'
    UTILITY = 'utility'


class RestType(Enum):
    SHORT = 'short'
    LONG = 'long'
