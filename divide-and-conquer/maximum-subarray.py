# Input: 数组 A .
# output: A的和最大的非空连续子数组，即最大子数组.

A = [13, -3, -25, 20, -3, -16, -23, 18,\
    20, -7, 12, -5, -22, 15, -4, 7]

# 暴力求解

def violence(list):
	max_subarr_sum = list[0]
	subarr_start = 0
	subarr_end = 0

	for i in range(0, len(list)):
		subarr_sum = 0
		for j in range(i, len(list)):
			subarr_sum += list[j]
			if subarr_sum > max_subarr_sum:
				max_subarr_sum = subarr_sum
				subarr_start = i
				subarr_end = j

	print('subarr_start:', subarr_start)
	print('subarr_end:', subarr_end)
	print('max_subarr_sum:', max_subarr_sum)

	print('maximum subarray: [', end='')
	for i in range(subarr_start, subarr_end):
		print(list[i], ',', end='')
	print(list[subarr_end],']', sep='')


violence(A)

#分治法
