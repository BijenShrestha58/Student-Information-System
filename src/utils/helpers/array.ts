export const getCustomOrderSort = (
    array: readonly string[],
    sortOrder: readonly string[],
) => {
    const temp = [...array].sort(
        (x, y) => sortOrder.indexOf(x) - sortOrder.indexOf(y),
    )
    return temp
}

export const generatePageArray = (limit: number, count: number): number[] => {
    let val: number[] = []
    const pageNum = Math.ceil(count / limit)
    for (let i = 0; i <= pageNum; i++) {
        val = [...val, i]
    }
    return val
}

export const separateArrays = (array: any[], property1: string, property2: string) => {
    const newArr1 = array.map((v: any) => v[property1]);
    const newArr2 = array.map((v: any) => v[property2]);
  
    return { newArr1, newArr2 };
  };