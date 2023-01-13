function factor(num)
{
    let product = 1;
    for  (let i=2; i<=num;i++)
    {
        product*=i;
    }
    console.log(product)
}

factor(3)
