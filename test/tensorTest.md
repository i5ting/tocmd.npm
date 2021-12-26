本文提供了与流体动力学和计算流体力学有关的张量数学信息。本文介绍了：

标量和张量以及典型的代数向量运算。
接下来是二阶张量、代数运算、以及其对称性、偏度还有张量的不变量（比如迹、行列式）。
在介绍坐标系和轴变换之前，简要讨论了下高阶张量。
张量计算与微分算子（比如div、grad、curl、Laplacian）一起介绍。
最后一部分， 介绍了高斯和斯托克斯积分定理，div和curl的物理意义，标量和向量势。

# 标量与向量

标量一般用斜体字母表示，比如$p,T,\rho$。标准的向量运算必须使用相同的测量单位。特别对于，加法、减法、相等只对于相同量纲的标量有物理意义。

向量代表了既有大小也有方向的实体。在一般情况下，n维向量$a$能够被n个标量$(a_1,a_2,...a_n)$，这是在$x_1,x_2,..,x_n$的分量。对于连续介质力学，一般是三维欧氏空间，向量也一般是三维向量。对于笛卡尔坐标系，是$(x_1,x_2,x_3)$。对于圆柱坐标系，是$(r,\theta,z)$。对于球面坐标系，是$(r,\theta,\phi)$。

可以使用指数计数法来表示相同的向量，即：$a_i(i=1,2,...,n)$，其中的i指的就是与坐标轴有关的量。后面的指数列表在应用到写方程的数学文本形式上经常被省略。在本文中，一般向量和张量在张量表示法中都是以粗体出现的。这样表示法的好处是：

它不用表示有关坐标系的任何东西；
它将向量的概念提升到了一个带有方向和大小的实体上，而不只是一组数。
它更加紧凑。
向量的绝对值或者说是模，在不同的表示方式下用$\bf{a}$、$a_i$分别表示为$|\bf{a}|$、$\bm{a}$。

## 两个向量的标量积（点乘）
略

## 两个向量的向量积（叉乘）
$$ \bm{a}\times\bm{b}=(a_2b_3-a_3b_2,a_3b_1-a_1b_3,a_1b_2-a_2b_1)=e_{ijk}a_{j}b_k $$

其中置换符号：

$$ e_{i j k}=\left\{\begin{array}{ll} 0 & \text { when any two indices are equal } \\ +1 & \text { when } i, j, k \text { are an even permutation of } 1,2,3 \\ -1 & \text { when } i, j, k \text { are an odd permutation of } 1,2,3 \end{array}\right. $$

其中123,231,312是偶置换,132,213,321是奇置换。

$$ \begin{array}{c} \mathbf{a} \times \mathbf{a}=\mathbf{0} \\ \mathbf{a} \times \mathbf{b}=-\mathbf{b} \times \mathbf{a} \\ \mathbf{a} \times(\mathbf{b}+\mathbf{c})=\mathbf{a} \times \mathbf{b}+\mathbf{a} \times \mathbf{c} \end{array} $$

$\mathbf{a} \times \mathbf{b}$在三维空间中的物理意义是代表了一个垂直于a,b所构成的平面的向量,其大小与a,b组成的平行四边形的面积.


$\delta_{pq}$是另一个在下标表示法中可以简化方程的符号.它的定义如下:

$$ \delta_{pq}=\left\{\begin{aligned} 1,if~~p=q\\ 0,if~~p\neq q \end{aligned}\right. $$

了解$e$和$\delta$符号有时候对于~控制向量~方程式很有效的:

$$ e_{ijk} e_{irs}=\delta_{jr}\delta_{ks}-\delta_{js}\delta_{kr} $$

# 二阶张量
二阶张量在这里被定义为一个线性向量函数,也就是说,它是一个将参数向量与另一个向量相关联的函数.向量本身式一个张量,而标量是零阶张量.之后简单讨论的高阶张量,在大多数时候,我们遇到的都是二阶张量,就简单称其为张量.

张量作为一个线性向量的函数如下:

$$ u_i=T_{ij}v_j $$

一个n维的二阶张量,T或$T_{ij}$有$n^2$个分量,其在轴$x_1,x_2,...,x_n$上的以一个矩阵的方式表示:

$$ \mathbf{T}=T_{i j}=\left(\begin{array}{cccc} T_{11} & T_{12} & \ldots & T_{1 n} \\ T_{21} & T_{22} & \ldots & T_{2 n} \\ \vdots & \vdots & \ddots & \vdots \\ T_{n 1} & T_{n 2} & \ldots & T_{n n} \end{array}\right) $$

矩阵表示法的使用应该谨慎，因为它会使代数变得笨拙，并且对于秩高于2的张量，矩阵表示法几乎变得难以管理。

三维张量有九个分量,其矩阵表示为

$$ \mathbf{T}=T_{i j}=\left(\begin{array}{lll} T_{11} & T_{12} & T_{13} \\ T_{21} & T_{22} & T_{23} \\ T_{31} & T_{32} & T_{33} \end{array}\right) $$

## 点乘
$u_i=T_{ij}v_j$可以用张量表示法写成一个单点积运算，将一个几何向量与另一个几何向量配对（为了方便起见，将向量展开成一列）.

$$ \mathbf{u}=\mathbf{T} \cdot \mathbf{v}=T_{i j} v_{j}=\left(\begin{array}{l} T_{11} v_{1}+T_{12} v_{2}+T_{13} v_{3} \\ T_{21} v_{1}+T_{22} v_{2}+T_{23} v_{3} \\ T_{31} v_{1}+T_{32} v_{2}+T_{33} v_{3} \end{array}\right) $$

现在,我们定义张量$\mathbf{S}$是$\mathbf{T}$的专职,则有$S_{ij}=T_{ij}$,于是:

$$ \mathbf{u}=\mathbf{v} \cdot \mathbf{S}^{\mathrm{T}}=v_{i} S_{j i} $$

单位张量:$\mathbf{I}\cdot\mathbf{v}=\mathbf{v}\cdot\mathbf{I}=\mathbf{v}$ 也就是说:

$$ \mathbf{I}=\delta_{i j}=\left(\begin{array}{lll} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{array}\right) $$

## 对称与反对称(skew/antisymmetric)张量
如果张量的分量是对称的,那么就可以说它是对称的,即:$\mathbf{T}=\mathbf{T}^T$.反对称张量则是:$\mathbf{T}=-\mathbf{T}^T$,反对称张量的对角元素为0.

任何一个二阶张量都能用对称张量和反对称张量表示:

$$ \mathbf{T}=\underbrace{\frac{1}{2}\left(\mathbf{T}+\mathbf{T}^{\mathrm{T}}\right)}{\text {symmetric }}+\underbrace{\frac{1}{2}\left(\mathbf{T}-\mathbf{T}^{\mathrm{T}}\right)}{\text {skew }}=\operatorname{symm} \mathbf{T}+\text { skew } \mathbf{T} $$

对称张量或者反对称张量在轴变换之后,依然是对称/反对称的.也就是说,对称和反对称是张量的固有属性,与他们所代表的坐标系无关.

## 两个张量的标量积
标量乘法的符号是$\mathbf{T}:\mathbf{S}$表示的是张量的九个分量乘积之和:

$$ \begin{aligned} \mathbf{T}: \mathbf{S}=T_{i j} S_{i j}=& T_{11} S_{11}+T_{12} S_{12}+T_{13} S_{13}+\ & T_{21} S_{21}+T_{22} S_{22}+T_{23} S_{23}+\ & T_{31} S_{31}+T_{32} S_{32}+T_{33} S_{33} \end{aligned} $$

还有另一个双点积的定义是:$\mathbf{T}\cdot \cdot \mathbf{S}$

$$ \begin{aligned} \mathbf{T} \cdot \cdot \mathbf{S}=T_{i j} S_{j i}=& T_{11} S_{11}+T_{12} S_{21}+T_{13} S_{31}+\ & T_{21} S_{12}+T_{22} S_{22}+T_{23} S_{32}+\ & T_{31} S_{13}+T_{32} S_{23}+T_{33} S_{33} \end{aligned} $$

当然,如果张量是对称的,那么这两个双点积就没有什么区别.

## 两个向量的张量积
两个向量的张量积:$\mathbf{a}\mathbf{b}$或$\mathbf{a}\otimes\mathbf{b}$,其定义是:

$$ \mathbf{a b}=a_{i} b_{j}=\left(\begin{array}{lll} a_{1} b_{1} & a_{1} b_{2} & a_{1} b_{3} \\ a_{2} b_{1} & a_{2} b_{2} & a_{2} b_{3} \\ a_{3} b_{1} & a_{3} b_{2} & a_{3} b_{3} \end{array}\right) $$

两个张量的张量积
如$\mathbf{P}=\mathbf{T}\cdot\mathbf{S}$,其中,$\mathbf{P}$为:

$$
P_{ij}=T_{ik}S{kj}
$$

张量积是唯一可交换的,因为两个张量都是对称张量,即:

$$ \mathbf{T} \cdot \mathbf{S}=\left[\mathbf{S}^{\mathrm{T}} \cdot \mathbf{T}^{\mathrm{T}}\right]^{\mathrm{T}} $$


## 张量的迹
张量的迹是一个张量的标量不变量函数,记为:

$$ \operatorname{tr} \mathbf{T}=T_{i j} \delta_{i j}=T_{k k}=T_{11}+T_{22}+T_{33} $$

## 张量的行列式
张量的行列式同样也是一个张量的标量不变量函数,记为:

$$ \begin{gathered} \operatorname{det} \mathbf{T}=\left|\begin{array}{lll} T_{11} & T_{12} & T_{13} \\ T_{21} & T_{22} & T_{23} \\ T_{31} & T_{32} & T_{33} \end{array}\right|=\frac{1}{6} e_{i j k} e_{p q r} T_{i p} T_{j q} T_{k r}= \\ T_{11}\left(T_{22} T_{33}-T_{23} T_{32}\right)-T_{12}\left(T_{21} T_{33}-T_{23} T_{31}\right)+T_{13}\left(T_{21} T_{32}-T_{22} T_{31}\right) \end{gathered} $$

## 高阶张量
在之前的小节中,我们定义了两个向量的张量积,这会产生一个二阶张量.而对于超过二阶的张量则可以通过两个以上的向量组成.比如说,三阶张量$\mathbf{a}\mathbf{b}\mathbf{c}$,四阶张量$\mathbf{a}\mathbf{b}\mathbf{c}\mathbf{d}$.如果四阶张量其中有一个是标量积,如$\mathbf{a}\mathbf{b}\cdot\mathbf{c}\mathbf{d}$,那么就会退回二阶张量.如果是两个二阶张量的标量积,比如说:$\mathbf{a}\mathbf{b}:\mathbf{c}\mathbf{d}$,那么结果就会小于四阶张量(成了一个标量/零阶张量).通过标量积来减小张量阶数的过程称为收缩(contraction).点的符号表示收缩的程度,并且可以拓展到任意阶的张量.在连续介质力学中,超过二阶的张量是很罕见的.大多数张量的操作都能在第1,第2部分找到:

一个向量$\mathbf{a}$与一个二阶张量$\mathbf{T}$的向量积将会产生了一个三阶张量$\mathbf{P}=\mathbf{a}\mathbf{T}$,其分量为 $$P_{ijk}=a_iT_{jk}$$ 一个向量$\mathbf{a}$与一个三阶张量$\mathbf{P}$的标量积将会产生了一个二阶张量$\mathbf{T}=\mathbf{a}\cdot\mathbf{P}$ $$T_{jk}=a_iP_{ijk}$$ 一个四阶张量$\mathbf{C}$和一个二阶张量$\mathbf{S}$的双点积$:$则会产生一个二阶张量$\mathbf{T}=\mathbf{C}:\mathbf{S}$: $$T_{ij}=C_{ijkl}S_{kl}$$

## 坐标系和轴变换
在连续介质力学里面物理量的参考基础是我们所使用的坐标系.如果一个坐标系发生了变换,那么张量的各个分量也会随之改变.我们必须研究一组轴的性质,从而制定坐标变换的规则.

## 笛卡尔坐标系
我们将把坐标描述限制在一组右手直角笛卡尔坐标轴上，如下图所示:


他的轴系统是通过定义一个原点O来构建的，从该原点O可以绘制三条相互成直角的线，称为Ox 1、Ox 2和Ox 3轴。

现在我们定义一个位置向量,其与各轴的夹角为:$\alpha,\beta,\gamma$.那么他们的方向余弦$(cos \alpha,cos \beta,cos \gamma)$可以由下标表示:$l_i=p_i/p$,或者可以简单表示为: $$\mathbf{l}=\frac{\mathbf{p}}{|\mathbf{p}|}$$

## 坐标轴的旋转
现在我们考虑两个有着相同原点的坐标系,记为$Ox_1x_2x_3$和$Ox_1^{\prime}x_2^{\prime}x_3^{\prime}$


这两组轴可以通过轴旋转重合.其中$Ox_1^{\prime}x_2^{\prime}x_3^{\prime}$相对于$Ox_1x_2x_3$的位置可以用$Ox_1^{\prime}x_2^{\prime}x_3^{\prime}$在$Ox_1x_2x_3$的方向余弦表示.将$Ox^{\prime}1$的方向余弦在$Ox_1Ox_2Ox_3$坐标系下分别表示为:$L{11},L_{12},L_{13}$.而$Ox^{\prime}1$和$Ox^{\prime}_1$分别为$L{21},L_{22},L_{23}$,$L_{31},L_{32},L_{33}$,那么这个变换就可以总结为:


矩阵变换能够通过将这组方向余弦定义为张量$\mathbf{L}=L_{ii}$来表示.那么在坐标系$Ox_1x_2x_3$的坐标$\mathbf{x}$可以由$Ox_1^{\prime}x_2^{\prime}x_3^{\prime}$表示为: $$\mathbf{x}^{\prime}=\mathbf{L}\cdot\mathbf{x}$$ 变换张量的分量L必须满足特定的条件,因为他们都是右手坐标轴,由于轴之间是互相垂直的: $$ \begin{aligned} &L_{11} L_{21}+L_{12} L_{22}+L_{13} L_{23}=0 \\ &L_{21} L_{31}+L_{22} L_{32}+L_{23} L_{33}=0 \\ &L_{31} L_{11}+L_{32} L_{12}+L_{33} L_{13}=0 \end{aligned} $$ 且他们的平方和是一致的: $$ \begin{aligned} &L_{11}^{2}+L_{12}^{2}+L_{13}^{2}=0 \\ &L_{21}^{2}+L_{22}^{2}+L_{23}^{2}=0 \\ &L_{31}^{2}+L_{32}^{2}+L_{33}^{2}=0 \end{aligned} $$ 上面两个式子所表述的正交条件,能够使用更加紧凑的格式表示: $$\mathbf{L}\mathbf{L}^T=\mathbf{I}$$ 且变换矩阵必须满足进一步的要求,来确保两组轴都是右手系: $$det\mathbf{L}=1$$

# 张量计算
目前为止我们面对的都是在某一点的张量的代数.张量(任意阶)在连续介质力学中随着空间和时间的变换叫张量场.因此我们还要面对张量在空间和时间上的导数.时间导数的主题需要在运动学的背景下进行更长的讨论,但这里我们只介绍用$D/Dt$来表示的全(时间)导数.

假设我们有一个位置向量$\mathbf{p}(t)$,他们物质的一个例子,在时间t是的速度可以这么表示: $$\frac{D\mathbf{p}}{Dt}=\lim_{t \to 0}\frac{\Delta \mathbf{p}}{\Delta t}$$ 其他张量的时间导数也是这么定义的.时间导数的乘积与两个或者更多张量的标量特性有着相同的规则.但是必须强调一个运算,比如说向量乘积$\times$是不可交换的,必须保持运算的顺序: $$\frac{D}{D t}(\mathbf{a}\times\mathbf{b})=\frac{D\mathbf{a}}{Dt}+a\times\frac{D\mathbf{b}}{Dt}$$

## 梯度
如果一个定义的标量场$\mathbf{F}$是连续可微的,那么它的梯度$\nabla \mathbf{F}$ $$\nabla \mathbf{F}=\partial_i\mathbf{F}=(\frac{\partial \mathbf{F}}{\partial x_1},\frac{\partial \mathbf{F}}{\partial x_2},\frac{\partial \mathbf{F}}{\partial x_3})$$ 这里我们引入了nabla向量算子,代表了下标计数法中的$\partial_i$ $$\nabla\equiv\partial_i=\frac{\partial}{\partial x_i}\equiv (\frac{\partial}{\partial x_1},\frac{\partial}{\partial x_2},\frac{\partial}{\partial x_3})$$ nabla运算符对其右边的量的作用规则与一个乘积的导数运算规则一样.除此之外,nabla运算符和其他向量在代数运算中表现一致.当使用下标标记法是,$\partial_i$的使用比起其他标记法有很出,因为它可以代表任何其他向量的nabla运算发.

$F$在单位向量$\mathbf{n}$上的导数: $$\frac{\partial F}{\partial n}=\mathbf{n}\cdot \nabla F=|\nabla F|cos\theta$$ 其中$\theta$是$\nabla F$与$\mathbf{n}$的夹角.假设$\nabla F \neq 0$,那么$\frac{\partial F}{\partial n}$在$\theta=0$时取得最大值.因此向量$\nabla F$的方向时$F$增长最快的方向,且增长率的大小为$|\nabla F|$

梯度能够作用在任何张量上,并产生一个高一阶的张量.比如说,向量$\mathbf{a}$的梯度是一个张量: $$ \nabla \mathbf{a}=\partial_{i} a_{j}=\left(\begin{array}{lll} \partial a_{1} / \partial x_{1} & \partial a_{2} / \partial x_{1} & \partial a_{3} / \partial x_{1} \\ \partial a_{1} / \partial x_{2} & \partial a_{2} / \partial x_{2} & \partial a_{3} / \partial x_{2} \\ \partial a_{1} / \partial x_{3} & \partial a_{2} / \partial x_{3} & \partial a_{3} / \partial x_{3} \end{array}\right) $$ 同样,我们也有: $$\frac{\partial\mathbf{a}}{\partial n}=\mathbf{n}\cdot\nabla \mathbf{a}$$ 向量梯度的物理含义是,向量的各个分量的最大变化率.

## 散度
如果一个向量场$\mathbf{a}$时连续可微的,那么$\mathbf{a}$的散度$\nabla\cdot\mathbf{a}$是一个标量: $$nabla\cdot\mathbf{a}=\partial_i a_i=\frac{\partial a_1}{\partial x_1}+\frac{\partial a_2}{\partial x_2}+\frac{\partial a_3}{\partial x_3}$$ 若$\nabla^\prime\cdot$和$\mathbf{a}^\prime$分别代表散度运算符和向量$\mathbf{a}$旋转到一个新的轴$Ox_1^\prime x_2\prime x_2^\prime$,那么结合上面的坐标变换公式,就有: $$\nabla^\prime\cdot a^\prime=(\mathbf{L}\cdot\nabla)\cdot(\mathbf{L}\cdot\mathbf{a})=\nabla\cdot(\mathbf{L}^T\cdot\mathbf{L})\cdot\mathbf{a}=\nabla\cdot\mathbf{a}$$ 因为L与$x_1,x_2,x_3$无关,且由正交条件$\mathbf{L}^T\mathbf{L}=\mathbf{I}$,因此可以得出一个向量场的散度是一个标量不变量.

散度能够作用在一阶或一阶以上的张量上,并产生一个低一阶的张量.比如说,对于二阶张量的散度是一个向量(为了方便书写,将这个向量写成列向量) $$ \nabla \cdot \mathbf{T}=\partial_{i} T_{i j}=\left(\begin{array}{l} \partial T_{11} / \partial x_{1}+\partial T_{12} / \partial x_{1}+\partial T_{13} / \partial x_{1} \\ \partial T_{21} / \partial x_{2}+\partial T_{22} / \partial x_{2}+\partial T_{23} / \partial x_{2} \\ \partial T_{31} / \partial x_{3}+\partial T_{32} / \partial x_{3}+\partial T_{33} / \partial x_{3} \end{array}\right) $$ 其物理含义会在第六部分进行讨论,且其时理解连续介质力学的中心点.

## 旋度(Curl)
如果向量场$\mathbf{a}$时连续可微的,那么向量的旋度$\nabla \times \mathbf{a}$是一个向量: $$\nabla \times \mathbf{a}=e_{ijk}\partial_j a_{k}=(\frac{\partial a_3}{\partial x_2}-\frac{a_2}{x_3},\frac{\partial a_1}{\partial x_3}-\frac{a_3}{x_1},\frac{\partial a_2}{\partial x_1}-\frac{a_1}{x_2})$$ 旋度能够作用在任何一阶或更高阶的张量上,并产生一个相同阶数的张量.比如说,一个二阶张量$\mathbf{T}$的旋度就是一个二阶张量: $$\nabla \times \mathbf{T}=e_{ijk}\partial_j T_{kl}$$ 和散度一样,旋度的物理意义会在第六部分内进行讨论,它同样对理解连续介质力学有着重大意义.

## 拉普拉斯算子
拉普拉斯算子是一个标量运算符,定义为:$\nabla^2\equiv\nabla\cdot\nabla$.我们可以推断出,拉普拉斯算子是一个标量不变量算子,因为它是两个向量的标量积,这两个向量都是nabla算子.一个标量场的拉普拉斯算子是一个标量: $$\nabla^2 F=\partial^2F=\frac{\partial^2F}{\partial x_1^2}+\frac{\partial^2F}{\partial x_2^2}+\frac{\partial^2F}{\partial x_3^2}$$

## 有用的张量恒等式
下面列出几个经过验证的恒等式,假设所有相关的量都是连续可微的.在恒等式中,标量$F$,向量$\mathbf{a}$,二阶张量$\mathbf{T}$ $$ \begin{aligned} &\nabla \cdot(\nabla \times \mathbf{a}) \equiv 0 \\ &\nabla \times(\nabla s) \equiv 0 \\ &\nabla \cdot(s \mathbf{a}) \equiv s \nabla \cdot \mathbf{a}+\mathbf{a} \nabla s \\ &\nabla \times(s \mathbf{a}) \equiv s \nabla \times \mathbf{a}+\mathbf{a} \nabla \times s \\ &\nabla(\mathbf{a} \cdot \mathbf{b}) \equiv \mathbf{a} \times(\nabla \times \mathbf{b})+\mathbf{b} \times(\nabla \times \mathbf{a})+(\mathbf{a} \cdot \nabla) \mathbf{b}+(\mathbf{b} \cdot \nabla) \mathbf{a} \\ &\nabla \cdot(\mathbf{a} \times \mathbf{b}) \equiv \mathbf{b} \cdot(\nabla \times \mathbf{a})-\mathbf{a} \cdot(\nabla \times \mathbf{b}) \\ &\nabla \times(\mathbf{a} \times \mathbf{b}) \equiv \mathbf{a}(\nabla \cdot \mathbf{b})-\mathbf{b}(\nabla \cdot \mathbf{a})+(\mathbf{b} \cdot \nabla) \mathbf{a}-(\mathbf{a} \cdot \nabla) \mathbf{b} \\ &\nabla \times(\nabla \times \mathbf{a}) \equiv \nabla(\nabla \cdot \mathbf{a})-\nabla^{2} \mathbf{a} \\ &(\nabla \times \mathbf{a}) \times \mathbf{a} \equiv \mathbf{a} \cdot(\nabla \mathbf{a})-\frac{1}{2} \nabla(\mathbf{a} \cdot \mathbf{a}) \end{aligned}$$

## 积分定理
在前面的内容里面,我们面对的时张量在一个点的行为,它代表了张量场.但是,张量在一个空间的有限区域内是什么样的也是必须要考虑的,因为许多连续介质力学的方程都是从中导出的.

导数依赖于一些积分定理,在这里积分定理以最一般的形式给出,其与坐标系的选择无关.定理中相关的量有线$\mathbf{C}$积分,面$\mathbf{S}$积分和体$\mathbf{V}$积分,他们们只是定积分,二重积分,三重积分的推广.如果说,对于定积分: $$\int^{a}_{b}f(x)dx$$ 这里我们沿着x轴在a到b之间积分,被积函数f是区间(a,b)为定义域的函数.在线积分中,我们沿着空间中的一条曲线积分,且被积函数沿着C上的所有点.在下列定理中,假定曲线和曲面是分段光滑的,即他们分别由有限个光滑曲线和曲面组成.

## 高斯定理
高斯定理将空间任意体积上的积分与体积边界曲面上的积分联系起来。一般形式的高斯定理是以下形式: $$\int_{S} \mathbf{n} \star \mathcal{A} d S=\int_{V} \nabla \star \mathcal{A} d V$$ 其中$\mathbf{n}$是$\mathbf{S}$上的单位法向量,$\mathcal{A}$可以表示任何标量场,向量场,张量场,这些场在$V$中式连续可微的.星星标识在这里引入用来代表任何乘积形式,标量$\mathbf{a}\cdot\mathbf{b}$,向量$\mathbf{a}\times\mathbf{b}$,张量$\mathbf{a}\mathbf{b}$.因为$\star$可以被$\cdot$,$\times$,或者干脆什么都没有代替,相应的体积分里面就会包含$\nabla\cdot,\nabla\times,\nabla$

## 斯托克斯定理
斯托克斯定理则是将空间上封闭曲线上的积分与以曲线为界围起来的空间曲面的积分联系起来.斯托克斯定理应用在一个向量$\mathbf{a}$上: $$ \int_{S} \mathbf{n} \cdot(\nabla \times \mathbf{a}) d S=\oint_{C} \mathbf{t} \cdot \mathbf{a} d C $$ 其中$\mathbf{t}$式沿着曲线的单位切向量.

## 散度和旋度的物理意义
封闭曲面$\mathbf{S}$围成的体积$\mathbf{V}$,考虑其积分$\mathbf{I}$ $$\mathbf{I}=\int{V}\nabla\cdot dV=\int{S}\mathbf{n}\cdot\mathbf{a}dS$$ 如果a的方向是远离封闭体积的方向,则$\mathbf{I}>0$,场$\mathbf{a}$从$\mathbf{V}$中发散开.如果a的方向是指向封闭体积,则$\mathbf{I}<0$,则场$\mathbf{a}$是收缩到$\mathbf{V}$的.

一般来说,$\mathbf{n}\cdot\mathbf{a}$沿着$\mathbf{S}$可以去正值或负值,$I$的符号表示场是收敛还是发散的.如果我们把空间坍塌为一点P,那么$\nabla\cdot\mathbf{a}$的符号代表点P的邻域是收敛还是发散的,它的大小代表收敛或发散的强度.

在连续介质力学的背景下,不可压缩介质的运动过程,通过材料的体积净流量必须为零,即穿过体积边界表面的速度$\mathbf{V}$的净流量必须为零.因此有: $$\int{S}\mathbf{n}\cdot\mathbf{V}=\int{V}\nabla\cdot\mathbf{V}dV=0$$ 通过将V坍缩到一点,可以得到不可压缩型的条件是在所有点上$\nabla \cdot \mathbf{V}=0$.


为了理解 $\nabla \times \mathbf{a}$的重要性,我们假设现在有一个封闭曲线$\mathbf{C}$围成的一般圆盘,中间点是$\mathbf{P}$,那么这个圆盘指向它的法向轴,方向为在点P上的$\nabla\times\mathbf{a}$.如果我们考虑: $$ I=\oint_{C} \mathbf{t} \cdot \mathbf{a} d C=\int_{S} \mathbf{n} \cdot(\nabla \times \mathbf{a}) d S $$ 因为$\mathbf{n}$和$\nabla\times\mathbf{a}$在同一个方向$\mathbf{n}\cdot(\nabla\times \mathbf{a})\geq 0$,那么这就表示P点的邻域要么是有旋的,即当$\mathbf{t}\cdot\mathbf{a}>0$,要么是无旋的,即当$\mathbf{t}\cdot\mathbf{a}=0$.无旋场$\mathbf{a}$的条件必须是$\nabla\times\mathbf{a}=0$.在连续介质力学中,当$\nabla\times\mathbf{V}=0$是,流动被称为无旋流动.

## 标量势和向量势
之前列出过一个式子$\nabla \times (\nabla\mathbf{F})\equiv0$,可以证明,如果(单连通)区域中定义的向量场$\mathbf{a}$,比如说$\nabla \times \mathbf{a}\equiv0$,那么标量势场$\mathbf{F}$存在,如$\mathbf{a}\equiv\nabla\mathbf{F}$.

我们定义两个标量势,$\mathbf{F}$,$\mathbf{F}^\prime$,比如说$\mathbf{a}=\nabla\mathbf{F}=\nabla\mathbf{F}^\prime$,且让$\mathbf{U}=\mathbf{F}-\mathbf{F}^{\prime}$,则显然$\nabla\mathbf{U}=0$,这也就意味着$\mathbf{U}$必须是与坐标系无关的量,即$\mathbf{U}=const$.这说明除了加上一个常数,标量势是唯一的.

上面一小节中的最后说到,任意向量场$\mathbf{a}$,若$\nabla\times\mathbf{a}\equiv 0$,则它都是无旋的.那么对于这样一个场从两个点$P,Q$的线积分: $\int_{P}^{Q}\mathbf{t}\cdot\mathbf{a}dC$ 都是与积分路径无关的,我们称之为守恒.标量场能够被应用在连续介质力学的许多领域,它通常被用来价格第一个问题的复杂型,通过把一个向量场降维到一个标量场的方式.这么做,我们可以假设场是无旋的.

另一个公式$\nabla\cdot(\nabla\times\mathbf{a})$.它表明了如果一个定义在单连通区域的向量场,有$\nabla\cdot\mathbf{a}\equiv 0$,那么它的向量势场$\mathbf{b}$存在,有:$\mathbf{a}\equiv\nabla\times\mathbf{b}$.

现在我们定义两个向量势,$\mathbf{b},\mathbf{b^\prime}$,有$\mathbf{a}=\nabla\times\mathbf{b}=\nabla\times\mathbf{b^\prime}$,且让$\mathbf{c}=\mathbf{b}-\mathbf{b^\prime}$.可以看到$\nabla\times\mathbf{c}=0$,这说明有一个标量场$\mathbf{F}$存在,且$\mathbf{c}=\nabla\mathbf{F}$.这说明向量势是除了加上一个额外的任意的标量场外是唯一的值.一个向量场满足$\nabla \cdot \mathbf{a}\equiv0$被称为螺线管(???).

Helmholtz定理将向量势和标量势结合了起来,在任意连续可微的向量场$\mathbf{a}$都可以分解为无旋的标量场${F}$和一个螺线管向量场$\mathbf{b}$组成" $$\mathbf{a}=\nabla F+\nabla\times \mathbf{b}$$ 在a的区域内$\nabla \cdot a \neq 0$,也就是说$\mathbf{a}$是有源项,而在区域内$\nabla\times a\neq 0$,则称这块区域为$\mathbf{a}$的涡旋.
