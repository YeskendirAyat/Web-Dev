n=int(input())
a=list(map(int, input().split(' ')[:n]))
for i in range(0,n):
    if a[i]%2==0:
        print(a[i],end=' ')
