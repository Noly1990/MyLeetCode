# 175. 组合两个表 https://leetcode-cn.com/problems/combine-two-tables/

# Write your MySQL query statement below
SELECT Person.FirstName, Person.LastName, Address.City, Address.State FROM Person Left JOIN Address  ON  Person.PersonId = Address.PersonId