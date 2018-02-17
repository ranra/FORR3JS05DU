nodes = []

class Union_find:
    def __init__(self):
        self.nodes = [i for i in range(10)]
        self.path = []

    def check(self, p, q):
        if self.nodes[p] == self.nodes[q]:
            return True
        return False


    def union_find(self, p, q):
        p_id = self.nodes[p]
        q_id = self.nodes[q]
        for i in range(len(self.nodes)):
            if p_id == self.nodes[i]:
                self.nodes[i] = q_id
        print(self.nodes)



class Quick_union:
    def __init__(self):
        self.nodes = [i for i in range(10)]

    def root(self, i):
        while i != self.nodes[i]:
            i = self.nodes[i]
        return i

    def check(self,p, q):
        if self.root(p) == self.root(q):
            return True
        return False


    def quick_union(self, p, q):
        p_parent = self.root(p)
        q_parent = self.root(q)
        self.nodes[p_parent] = q_parent
        print(self.nodes)

class Weighted:
    def __init__(self):
        self.nodes = [i for i in range(10)]


    def root(self, i):
        while i != self.nodes[i]:
            self.nodes[i] = self.nodes[self.nodes[i]]
            i = self.nodes[i]
        return i

    def count(self):
        pass

    def w_union(self, p, q):
        p_root = self.root(p)
        q_root = self.root(q)
        # if q_root == p_root:
        #     return
        # else:
        self.nodes[p_root] = q_root
        print(self.nodes)







U = Union_find()
Q = Quick_union()
W = Weighted()
# U.union_find(6,9)
# U.union_find(3,9)
# U.union_find(6,9)
# print(U.check(3,9))
# Q.quick_union(6,9)
# Q.quick_union(6,3)
# print(Q.check(6,3))
W.w_union(6,9)
W.w_union(2,6)
W.w_union(7,2)

