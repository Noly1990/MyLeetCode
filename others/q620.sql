# 620. 有趣的电影 https://leetcode-cn.com/problems/not-boring-movies/


SELECT * from cinema WHERE id&1 AND description <> 'boring' ORDER BY rating DESC