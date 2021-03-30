n=int(input())
a=list(map(int, input().split(' ')[:n]))
a.reverse()
for i in a:
    print(i,end=" ")