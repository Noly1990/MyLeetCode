//648. 单词替换 https://leetcode-cn.com/problems/replace-words/

function replaceWords(dict: string[], sentence: string): string {
    let dictTree = new TrieTreeNode648();
    function insertTree(root: TrieTreeNode648, str: string) {
        let l = str.length;
        let index = 0;
        let recent = root;
        while (index < l) {
            const c = str[index];
            const num = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!recent.children[num]) {
                recent.children[num] = new TrieTreeNode648();
                recent = recent.children[num]
            } else {
                recent = recent.children[num]
            }
            index++;
        }
        recent.value = 1;
    }

    function searchTree(root: TrieTreeNode648, str: string) {
        let l = str.length;
        let index = 0;
        let recent = root;
        while (index < l) {
            const c = str[index];
            const num = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (recent.children[num]) {
                recent = recent.children[num];
                if (recent.value === 1) {
                    return str.substr(0, index + 1);
                } else {
                    index++;
                }
            } else {
                return ''
            }
        }
        return ''
    }

    function convertWord(inword: string): string {
        return searchTree(dictTree, inword);
    }

    dict.forEach(p => {
        insertTree(dictTree, p);
    })

    const wordSplit = sentence.split(' ');
    const out: string[] =  wordSplit.map(p => {
        let c = convertWord(p);
        return c.length ===0?p:c;
    })

    return out.join(' ');
};

function insertTree(root: TrieTreeNode648, str: string) {
    let l = str.length;
    let index = 0;
    let recent = root;
    while (index <= l - 1) {
        const c = str[index];
        const num = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!recent.children[num]) {
            recent.children[num] = new TrieTreeNode648();
            recent = recent.children[num]
        } else {
            recent = recent.children[num]
        }
        index++;
    }
    recent.value = 1;
}

class TrieTreeNode648 {
    public children: TrieTreeNode648[];
    public value: number;
    constructor(v?: number) {
        this.children = [];
        this.value = v === undefined ? 0 : v;
    }
}