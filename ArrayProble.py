#  - 4,1,7,2,9,   target - 3

def isPairPresent(arr):
    n=len(arr)
    target=1
    present=False
    for i in range(0,n-1):
        for j in range(i+1,n):
            if arr[i]+arr[j] == target:
                return True
    return False

arr=[4,1,7,2,9]
print(isPairPresent(arr))

        
    
