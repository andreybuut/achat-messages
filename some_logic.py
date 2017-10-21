from functools import reduce
from django.db import models

class Test(object):
    """docstring for Test"""
    def __init__(self, arg):
        self.arg = arg

    def __repr__(self):
        return self.arg


s = Test('asdadasdadad')
print(s)
