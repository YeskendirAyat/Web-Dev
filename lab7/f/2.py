def powOf(a):
    return pow(a[0],a[1])
a=list(map(int, input().split(' ')[:2]))
print(powOf(a))