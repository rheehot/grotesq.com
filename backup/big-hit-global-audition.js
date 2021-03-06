import React from 'react';
import Layout from '../components/Layout';
import { NextSeo } from 'next-seo';

const title = 'Big Hit Global Audition - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescription =
  '빅히트 엔터테인먼트의 글로벌 오디션 사이트. QR코드를 이용한 접수 자동화 시스템을 구축했습니다.';
const ogTitle =
  'Big Hit Global Audition - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/works/big-hit-global-audition';
const ogImage =
  'https://www.grotesq.com/assets/images/works/big-hit-global-audition/bighit-user-1.png';
const ogImageWidth = 1600;
const ogImageHeight = 1067;
const ogDescription =
  '빅히트 엔터테인먼트의 글로벌 오디션 사이트. QR코드를 이용한 접수 자동화 시스템을 구축했습니다.';

export default () => (
  <Layout>
    <NextSeo
      title={title}
      description={metaDescription}
      openGraph={{
        url: ogUrl,
        title: ogTitle,
        description: ogDescription,
        images: [
          {
            url: ogImage,
            width: ogImageWidth,
            height: ogImageHeight,
            alt: ogTitle,
          },
        ],
        site_name: '그로테스큐 스튜디오 || Studio GrotesQ',
      }}
    />
    <div className="gq-section gq-section--dark">
      <h1>
        <span>Big Hit Global Audition</span>
      </h1>

      <div className="container">
        <div className="text-center">
          <img
            src="/assets/images/works/big-hit-global-audition/bighit-user-1.png"
            alt=""
            className="gq-image-landscape"
          />
        </div>

        <p className="mt-5">
          빅히트 엔터테인먼트의 글로벌 오디션 사이트를 구축했습니다.
          <br />
          전세계를 대상으로 하는 사이트인 만큼 글로벌 CDN을 구축하고 다국어를
          적용했습니다.
          <br />
          반응형 웹사이트로 사용자들이 손쉽게 오디션을 접수하고 확인하고 참여할
          수 있습니다.
        </p>
      </div>
    </div>

    <div className="gq-section">
      <div className="container">
        <img
          src="/assets/images/works/big-hit-global-audition/bighit-user-2_3.png"
          alt=""
          className="gq-image-landscape"
        />

        <p className="mt-5">
          기존의 오디션은 이메일로 워드 파일을 받아 담당자가 손으로 정리하는
          시스템으로 많은 인력 리소스가 필요했고 실수할 확률이 높았습니다.
          <br />
          신규 시스템에서는 문서 작업 없이 사용자가 바로 신청할 수 있도록 하고,
          신청서는 관리자가 쉽게 조회가 가능하며, 오디션 현장에서도 QR 코드를
          이용해 빠르게 접수 내용을 조회하고 등록할 수 있도록 했습니다.
        </p>

        <p></p>
      </div>
    </div>

    <div className="gq-section gq-section--dark">
      <div className="container">
        <img
          src="/assets/images/works/big-hit-global-audition/bighit-admin-2.png"
          alt=""
          className="gq-image-landscape"
        />
      </div>
    </div>

    <div className="gq-section">
      <div className="container">
        <h2>
          <span>GOAL</span>
        </h2>

        <ul>
          <li>프레임워크 없는 프레임워크 수준의 사이트 구축</li>
          <li>순간적인 대량의 트래픽에 대응하는 서버 분산 처리</li>
          <li>이탈율을 최소로 하는 중단 없는 접수 페이지 구현</li>
          <li>QR코드를 이용한 접수 자동화</li>
          <li>확장성 높은 다국어 지원</li>
        </ul>
      </div>
    </div>

    <div className="gq-section gq-section--dark">
      <div className="container">
        <h2>
          <span>프레임워크 없는 프레임워크 수준의 사이트 구축</span>
        </h2>

        <p>
          초기의 컨셉은 최종 구현 형태인 단독 접수 사이트가 아닌 기존 사이트의
          일부 페이지로 구현되는 것이었습니다. 따라서 기존 사이트의 형태를
          충실히 따르되 최신 기능들이 신규 페이지에서만 제한적으로 적용되는
          혼합된 형태의 구축이 필요했습니다.
        </p>
        <p>
          각 주소에 해당하는 php 파일은 단순 라우터의 역할을 하도록 하고,
          실제적인 내부 구현은 Composer 를 통해서 설치된 Symphony HTTP
          Foundation, Eloquent ORM, Blade Template Engine 등을 이용해 내부
          구현을 프레임워크에 가까운 수준으로 구현했습니다.
        </p>
        <p>
          안정성 있는 Composer 패키지들을 엄선해 사용하고, 차후에 프레임워크로
          완전히 이전을 할 때에도 코드를 바로 사용할 수 있도록 최대한 PSR을
          준수해 작성했습니다.
        </p>
      </div>
    </div>
    <div className="gq-section">
      <div className="container">
        <h2>
          <span>순간적인 대량의 트래픽에 대응하는 서버 분산 처리</span>
        </h2>

        <p>
          빅히트 엔터테인먼트는 전세계를 대상으로 지원자들을 모집하고, 지역별
          오픈 시간이 사전에 공지되어 있기 때문에 해당 시간대에 폭발적인 접속이
          예상되었습니다. 지역별로 오픈과 마감이 정해져 있지만 조금씩 시간대가
          겹쳐있기 때문에 오픈 이후로는 반드시 어딘가 한 곳 이상은 접수중인
          상태가 유지되어야 했습니다. 따라서 대량의 트래픽을 소화하기 위한
          분산처리와, 무중단 서비스를 구축하는 것이 중요했습니다.
        </p>
        <p>
          이 문제를 해결하기 위해 AWS의 기술들을 이용했습니다. 기본적인 컴퓨팅
          서비스는 Elastic Beanstalk을 이용해 오토스케일링을 할당하고 배포
          방식으론 추가 배치를 통한 롤링 배포를 설정해 무중단으로 서비스 되도록
          했습니다. 사용자들이 업로드 하는 자료는 S3에 배포한 후 Cloud Front로
          CDN 처리해 전세계 모든 리전을 대상으로 배포/캐싱되도록 처리했습니다.
        </p>
      </div>
    </div>
    <div className="gq-section gq-section--dark">
      <div className="container">
        <h2>
          <span>이탈율을 최소로 하는 중단 없는 접수 페이지 구현</span>
        </h2>

        <p>
          신청서를 작성하는 과정에 있어서 변심 외의 다른 기술적인 요인으로
          이탈이 발생하는 것을 최소화 했습니다. 작성 양식에 있어 검증이 필요한
          내용은 항상 실시간으로 체크해 사용자에게 바로 피드백을 전달합니다.
          접수 버튼을 눌러 폼이 전송된 후 검증 결과에 따라 내용을 재입력하는
          경우를 제로에 수렴하도록 만드는 것을 목표로 했습니다.
        </p>
        <p>
          이를 구현하기 위해 프론트엔드에 리액트를 도입했습니다. 하지만 SPA로
          구축하지는 않으므로 화면상의 주요 컴포넌트들만 리액트로 렌더링 할 수
          있도록 커스텀 DOM 렌더러를 만들어 처리를 했습니다.
        </p>
      </div>
    </div>
    <div className="gq-section">
      <div className="container">
        <h2>
          <span>QR코드를 이용한 접수 자동화</span>
        </h2>

        <p>
          이번 프로젝트의 가장 핵심적인 부분으로, 기존의 서류 접수 방식을 완전히
          전자문서화 하도록 했습니다. 신청자는 접수와 동시에 QR코드를 발급받고,
          메일로도 사본을 받습니다. 오디션 현장 접수처에서는 이 QR코드를
          스캐너로 읽기만 하는 것으로 접수자의 내용을 조회할 수 있으며, 자동으로
          통계 처리 됩니다.
        </p>
      </div>
    </div>
    <div className="gq-section gq-section--dark">
      <div className="container">
        <h2>
          <span>확장성 높은 다국어 지원</span>
        </h2>

        <p>
          전세계를 대상으로 오디션을 진행하게 되므로 다국어에 대한 처리는
          필수적이었습니다. 화면에 대한 렌더링을 PHP와 리액트가 분담하게 되므로,
          각 언어에 맞는 다국어 처리가 필요했습니다. i18n 표준을 준수하는
          라이브러리를 채택해 각기 다른 라이브러리를 사용하지만 언어 파일은 같은
          json을 공유할 수 있도록 했습니다.
        </p>
        <p>
          또한 언제든 필요한 언어를 추가할 수 있도록 확장성 있는 구조로
          제작되었습니다.
        </p>
        <p>
          언어에 따른 사이트 디자인에 대한 최적화를 위해 HTML5 표준 lang 스펙을
          따르도록 제작되고 각 언어에 맞는 웹폰트가 불러와 적용되도록 처리
          되었습니다.
        </p>
      </div>
    </div>

    <div className="gq-section">
      <div className="container">
        <h2>
          <span>Technical Summary</span>
        </h2>

        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">Backend</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>Symphony Framework</li>
                  <li>Laravel Libraries</li>
                  <li>i18n for PHP</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">Frontend</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>React</li>
                  <li>React Dynamic Loader</li>
                  <li>i18n for Javascript</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">etc</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>Amazon Web Services</li>
                  <li>Elastic Beanstalk</li>
                  <li>Cloud Front with S3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
