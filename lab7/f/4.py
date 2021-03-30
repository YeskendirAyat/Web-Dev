def xor(a):
    c=0
    for i in a:
        if i==0:
            c+=1
    return c
a=list(map(int, input().split(' ')[:3]))
if xor(a)>1:
    print(0) 
else:print(1)