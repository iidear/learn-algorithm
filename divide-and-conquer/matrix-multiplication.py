import numpy as numpy

# n阶矩阵的乘法
# 矩阵 C[n][n] = A[n][n] x B[n][n]

#A = [[1,0,0,0], [0,2,5,0], [2,1,4,0], [1,1,1,1]]
#B = [[2,8,3,3], [2,4,7,1], [1,0,6,2], [1,0,1,0]]
# 使用numpy生成矩阵
A = numpy.random.randint(0,10, size=[4,4])
B = numpy.random.randint(0,10, size=[4,4])

# 定义求解
def defination(A, B):
	n = len(A)
	C = [[0 for col in range(n)] for row in range(n)]

	for i in range(0, n):
		for j in range(0, n):
			for k in range(0,n):
				C[i][j] += A[i][k] * B[k][j]

	return C

print('numpy求解')
print(numpy.dot(A,B),'\n')
print('定义求解 O(n**3):')
print(defination(A, B))

# 分块矩阵 ！矩阵合并的时候好坑啊，搞不定
# A_info = (i_low, j_low, i_high, j_high)
# 其中(i_low, j_low)为矩阵左上角坐标， (i_high, j_high)为矩阵右下角坐标
# count = [0]
# def block(A, B, A_info, B_info):
# 	count[0] += 1
# 	print('count:', count[0])
# 	# base case
# 	if A_info[2] == A_info[0]:
# 		C = A[A_info[0]][A_info[0]] * B[B_info[0]][B_info[0]]
# 		print('C##:',[C])
# 		return [C]
# 	# recursive case
# 	else:
# 		# divide
# 		n = A_info[2] - A_info[0]
# 		mid = int(n/2)
# 		A11_info = (A_info[0], A_info[1], A_info[0]+mid, A_info[1]+mid)
# 		A12_info = (A_info[0], A_info[1]+mid+1, A_info[0]+mid, n)
# 		A21_info = (A_info[0]+mid+1, A_info[1], A_info[2], A_info[1]+mid)
# 		A22_info = (A_info[0]+mid+1, A_info[1]+mid+1, A_info[2], A_info[3])
# 		B11_info = (B_info[0], B_info[1], B_info[0]+mid, B_info[1]+mid)
# 		B12_info = (B_info[0], B_info[1]+mid+1, B_info[0]+mid, n)
# 		B21_info = (B_info[0]+mid+1, B_info[1], B_info[2], B_info[1]+mid)
# 		B22_info = (B_info[0]+mid+1, B_info[1]+mid+1, B_info[2], B_info[3])

# 		print(A11_info)
# 		# conquer
# 		C11 = numpy.add(block(A,B,A11_info,B11_info) , block(A,B,A12_info,B21_info))
# 		C12 = numpy.add(block(A,B,A11_info,B12_info) , block(A,B,A12_info,B22_info))
# 		C21 = numpy.add(block(A,B,A21_info,B11_info) , block(A,B,A22_info,B21_info))
# 		C22 = numpy.add(block(A,B,A21_info,B12_info) , block(A,B,A22_info,B22_info))

# 		# combine
# 		C1 = [[0 for col in range(mid+1)] for row in range(mid+1)]
# 		C2 = [[0 for col in range(mid+1)] for row in range(mid+1)]
# 		print('C1:',C1,'C12:',C12,'mid:',mid,'C11[i] + C12[i]:',C11[0] + C12[0])
# 		for i in range(0, mid+1):
# 			C1[i] = C11 + C12
# 			C2[i] = C21 + C22

# 		#print('C1 + C2####',C1 + C2)
# 		return C1 + C2

#print('简单分治法')
#print(block(A, B, (0,0, len(A)-1, len(A)-1), (0,0, len(B)-1, len(B)-1)))