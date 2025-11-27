import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>把时间，还给创造者</title>
        <meta name="description" content="一款AI工具背后的人文思考与技术实践" />
      </Head>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Arial' }}>
        {/* 英雄区域 */}
        <section style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>把时间，还给创造者</h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>一款AI工具背后的人文思考与技术实践</p>
        </section>

        {/* 问题介绍 */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ borderLeft: '4px solid #0070f3', paddingLeft: '15px' }}>我们发现的效率困境</h2>
          <p>我们发现，团队中最聪明的大脑，每天却在与繁琐的数据搬运搏斗。他们的灵感和创造力，被淹没在长达4小时、错误率高达40%的重复劳作中。</p>
        </section>

        {/* 挑战 */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ borderLeft: '4px solid #0070f3', paddingLeft: '15px' }}>我们遭遇的拦路虎</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
              <h3>元素定位难题</h3>
              <p>目标网页元素动态加载、结构复杂且缺乏唯一ID</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
              <h3>后台运行瓶颈</h3>
              <p>工具运行时占用大量资源，无法长时间稳定后台执行</p>
            </div>
          </div>
        </section>

        {/* 解决方案 */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ borderLeft: '4px solid #0070f3', paddingLeft: '15px' }}>我们的破解之道</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
              <h3>智慧之眼：XPath与父级定位</h3>
              <p>通过XPath精准定位和父级元素辅助，定位成功率从30%提升至98%</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
              <h3>隐形引擎：无头模式</h3>
              <p>采用浏览器无头模式，实现真正的后台稳定运行</p>
            </div>
          </div>
        </section>

        {/* 成果展示 */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ borderLeft: '4px solid #0070f3', paddingLeft: '15px' }}>我们创造的价值</h2>
          <div style={{ display: 'flex', gap: '20px', textAlign: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '150px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0070f3' }}>50+</div>
              <div>用户覆盖</div>
            </div>
            <div style={{ flex: '1', minWidth: '150px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0070f3' }}>96%</div>
              <div>准确率</div>
            </div>
            <div style={{ flex: '1', minWidth: '150px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0070f3' }}>500+</div>
              <div>每月节省小时</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}