n=int(input())
a=list(map(int, input().split(' ')[:n]))
c=0
if n<3:
    print(0)
else:
    for i in range(1,n-1):
        if (a[i]>a[i+1]) and (a[i]>a[i-1]):
            c+=1
    print(c)