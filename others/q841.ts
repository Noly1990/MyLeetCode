//  841. 钥匙和房间 https://leetcode-cn.com/problems/keys-and-rooms/

function canVisitAllRooms(rooms: number[][]): boolean {
    let len = rooms.length;
    let arr = new Array(len).fill(0);
    function openNum(n: number) {
        if (arr[n] === 0) {
            arr[n] = 1;
            if (rooms[n].length > 0) {
                rooms[n].forEach(v => {
                    openNum(v)
                })
            }
        }
    }

    openNum(0)

    return arr.every(v => v === 1);
};

console.log(canVisitAllRooms([[1],[2],[3],[]])
) 
