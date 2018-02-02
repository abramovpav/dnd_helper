from funcy import second, select, walk_values


NOT_AN_ARG = object()


class Enum(object):
    """Simple Enum class

    >>> class Color(Enum):
    ...     RED = 1
    ...     GREEN = 2
    ...     BLACK = 3
    >>> Color.RED
    1
    >>> Color.choices()
    [(3, 'Black'), (2, 'Green'), (1, 'Red')]
    >>> Color.enums()
    {1: 'RED', 2: 'GREEN', 3: 'BLACK'}
    >>> Color.values()
    [1, 2, 3]

    >>> class ColorEx(Enum):
    ...     RED = 1
    ...     GREEN = 2
    ...     BLACK = 3
    ...     label_BLACK = 'Blk'
    ...     label_RED = lambda cls: cls.prepare_label(value=cls.BLACK) + '-red'
    >>> ColorEx.choices()
    [(3, 'Blk'), (1, 'Blk-red'), (2, 'Green')]
    >>> ColorEx.enums()
    {1: 'RED', 2: 'GREEN', 3: 'BLACK'}
    """

    @classmethod
    def enums(cls):
        return {getattr(cls, a): a for a in select(str.isupper, dir(cls))}

    @classmethod
    def choices(cls):
        values = walk_values(cls.prepare_label, cls.enums()).items()
        return sorted(values, key=second)

    @classmethod
    def prepare_label(cls, key=NOT_AN_ARG, value=NOT_AN_ARG):
        if key is NOT_AN_ARG and value is not NOT_AN_ARG:
            key = cls.option_name(value)
        elif key is NOT_AN_ARG and value is NOT_AN_ARG:
            raise ValueError()

        label = getattr(cls, 'label_{}'.format(key), None)
        if label and callable(label):
            return unicode(label.__get__(cls)())
        elif label:
            return unicode(label)
        return (key or '').replace('_', ' ').title()

    @classmethod
    def option_name(cls, value):
        try:
            return cls.enums()[value]
        except KeyError:
            return None

    @classmethod
    def values(cls):
        return cls.enums().keys()
