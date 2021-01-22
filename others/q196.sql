# 196. 删除重复的电子邮箱 https://leetcode-cn.com/problems/delete-duplicate-emails/


DELETE p1 FROM Person p1, Person p2
WHERE p1.Email = p2.Email AND p1.id > p2.id