var cylR = COLOR ([1,0,0]) ( EXTRUDE([5])(CIRCLE(3)(100)) )
var cylG = COLOR ([0,1,0]) ( EXTRUDE([5])(CIRCLE(3)(100)) )
var cylB = COLOR ([0,0,1]) ( EXTRUDE([5])(CIRCLE(3)(100)) )
var rotCyl = R([0,2])([PI/6])
var rep = REPLICA(4)([rotCyl,cylR,rotCyl,cylG,rotCyl,cylB])
var str = STRUCT(rep)
DRAW(str)