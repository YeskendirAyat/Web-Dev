def xor(a):
    return a[0]^a[1]
a=list(map(int, input().split(' ')[:2]))
print(xor(a))