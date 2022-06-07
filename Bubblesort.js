let arr = [4,2,9,5,1,3]
for(let i = 0; i < arr.length; i++)
{
    for(let j = i+1; j<arr.length; i++)
    {
        if(arr[i]>arr[j])
        {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);