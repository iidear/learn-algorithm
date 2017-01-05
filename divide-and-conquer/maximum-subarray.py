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

	return (subarr_start, subarr_end, max_subarr_sum)

print('暴力求解结果：')
(subarr_start, subarr_end, max_subarr_sum) = violence(A)
print('subarr_start:', subarr_start)
print('subarr_end:', subarr_end)
print('max_subarr_sum:', max_subarr_sum)


# 分治法
## 求解跨越中间元素的最大子数组
def divideCross(A, low, mid, high):
	left_sum = float('-inf')
	sum = 0
	for i in range(mid, low-1, -1):
		sum += A[i]
		if sum > left_sum:
			left_sum = sum
			max_left = i

	right_sum = float('-inf')
	sum = 0
	for j in range(mid+1, high+1):
		sum += A[j]
		if sum > right_sum:
			right_sum = sum
			max_right = j
	return (max_left, max_right, left_sum+right_sum)


def divide(A, low, high):

	# base case
	if high == low:
		return (low, high, A[low])

	# recursive case
	else:
		# divide
		mid = int((low + high)/2)

		# conquer
		(left_low, left_high, left_sum) = divide(A, low, mid)
		(right_low, right_high, right_sum) = divide(A, mid+1, high)
		(cross_low, cross_high, cross_sum) = divideCross(A, low, mid, high)

		# combine
		if left_sum >= right_sum and left_sum >= cross_sum:
			return (left_low, left_high, left_sum)
		elif right_sum >= left_sum and right_sum >= cross_sum:
			return (right_low, right_high, right_sum)
		else:
			return (cross_low, cross_high, cross_sum)
	

print('分治法结果：')
(subarr_start, subarr_end, max_subarr_sum) = divide(A, 0, len(A)-1)
print('subarr_start:', subarr_start)
print('subarr_end:', subarr_end)
print('max_subarr_sum:', max_subarr_sum)