const privacyAgreement = `<div class="gPrivacy hide" style="display: none">
<div class="privacyBox">
  <div class="pTitle">
    <p><i class="ico"></i>隐私协议</p>
  </div>
  <div class="privacyMain">
    <p>
      严格遵守法律法规，遵循以下隐私保护原则，为您提供更加安全、可靠的服务：
    </p>
    <strong>1、安全可靠：</strong>
    <p>
      我们竭尽全力通过合理有效的信息安全技术及管理流程，防止您的信息泄露、损毁、丢失。
    </p>
    <strong>2、自主选择：</strong>
    <p>
      我们为您提供便利的信息管理选项，以便您做出合适的选择，管理您的个人信息
    </p>
    <strong>3、保护通信秘密：</strong>
    <p>
      我们严格遵照法律法规，保护您的通信秘密，为您提供安全的通信服务。
    </p>
    <strong>4、合理必要：</strong>
    <p>为了向您和其他用户提供更好的服务，我们仅收集必要的信息。</p>
    <strong>5、清晰透明：</strong>
    <p>
      我们努力使用简明易懂的表述，向您介绍隐私政策，以便您清晰地了解我们的信息处理方式。
    </p>
    <strong>6、将隐私保护融入产品设计：</strong>
    <p>我们在产品和服务研发、运营的各个环节，融入隐私保护的理念。</p>
    <strong>本《隐私政策》主要向您说明：</strong>
    <p>我们收集哪些信息 我们收集信息的用途 您所享有的权利</p>
    <strong>希望您仔细阅读《隐私政策》</strong>
    <p>
      为了让您有更好的体验、改善我们的服务或经您同意的其他用途，在符合相关法律法规的前提下，我们可能将通过某些服务所收集的信息用于我们的其他服务。例如，将您在使用我们某项服务时的信息，用于另一项服务中向您展示个性化的内容或广告、用于用户研究分析与统计等服务。
    </p>
    <p>
      若您使用服务，即表示您认同我们在本政策中所述内容。除另有约定外，本政策所用术语与《服务协议》中的术语具有相同的涵义。
    </p>
    <p>如您有问题，请联系我们。</p>
  </div>
  <div class="pSure">确定</div>
</div>
</div>`;

const viewPermissions = `<div class="gRule hide" style="display: none">
<div class="ruleBox">
  <div class="rTitle">
    <p><i class="ico"></i>查看权限</p>
  </div>
  <div class="ruleMain ruleHtml">
    <p>此应用程序需要访问以下内容</p>
    <strong>写入外部存储</strong>
    <p>允许程序写入外部存储，如SD卡上写文件</p>
    <strong>完全的网络访问权限</strong>
    <p>
      允许该应用创建网络套接字和使用自定义网络协议。浏览器和其他某些应用提供了向互联网发送数据的途径，因此应用无需该权限即可向互联网发送数据
    </p>
    <strong>拍摄照片和视频</strong>
    <p>允许访问摄像头进行拍照或录制视频</p>
    <strong>读取手机状态和身份</strong>
    <p>
      允许应用访问设备的电话功能。此权限可让应用确定本机号码和设备ID、是否正处于通话状态以及拨打的号码。
    </p>
    <strong>查看网络状态</strong>
    <p>允许应用程序查看所有网络的状态。例如存在和连接的网络</p>
    <strong>查看WLAN状态</strong>
    <p>允许程序访问WLAN网络状态信息</p>
    <strong>控制震动</strong>
    <p>允许应用控制振动设备</p>
    <strong>拨打电话</strong>
    <p>
      允许一个程序初始化一个电话拨号不需通过拨号用户界面需要用户确认，应用程序执行可能需要您付费
    </p>
  </div>
  <span class="rSure">确定</span>
</div>
</div>`;

$(function () {
  // 弹窗
  $(".gSecret").on("click", function () {
    const $privacyAgreement = $(privacyAgreement);
    $("body").append($privacyAgreement);
    $privacyAgreement.fadeIn();
  });

  $("body").on("click", ".pSure", function () {
    const $privacyAgreement = $(this).closest(".gPrivacy");
    $privacyAgreement.fadeOut(function () {
      $privacyAgreement.remove();
    });
  });
});

$(function () {
  // 弹窗
  $(".gPower").on("click", function () {
    const $viewPermissions = $(viewPermissions);
    $("body").append($viewPermissions);
    $viewPermissions.fadeIn();
  });

  $("body").on("click", ".rSure", function () {
    const $viewPermissions = $(this).closest(".gRule");
    $viewPermissions.fadeOut(function () {
      $viewPermissions.remove();
    });
  });
});
