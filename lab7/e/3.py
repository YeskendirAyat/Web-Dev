n=int(input())
a=list(map(int, input().split(' ')[:n]))
c=0
for i in range(0,n):
    if a[i]>0:
        c+=1
print(c)