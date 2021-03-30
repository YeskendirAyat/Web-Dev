def minOf(a):
    return min(a[0],a[1],a[2],a[3])
a=list(map(int, input().split(' ')[:4]))
print(minOf(a))