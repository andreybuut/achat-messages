def test(func):
    def inner(*args, **kwargs):
        print(args, 'in deco', kwargs)
        r = func(args, kwargs)
        print('After execute!!', r)
        return r
    return inner


@test
def t(name, name1=23):
    print(name, '+++', name1)
    return name, name1


t('andertyu', 'sada', name1=243)
