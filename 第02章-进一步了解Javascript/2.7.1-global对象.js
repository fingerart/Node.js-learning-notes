function pg (k) {
	console.log(global[k])
}

global.a = 'i am a'
global.b = 'i am b'

pg('a')
pg('b')
pg('c')