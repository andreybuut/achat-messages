import os


print('os.curdir {}'.format('123123'))

class Test(object):
	"""docstring for Test"""
	def __init__(self, arg):
		super(Test, self).__init__()
		self.arg = arg

	
	def __repr__(self):
		return self.arg


