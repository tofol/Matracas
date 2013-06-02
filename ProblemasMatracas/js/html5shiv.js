<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>html5shiv/src/html5shiv.js at master · aFarkas/html5shiv · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="E1iSkGbZMYgGIijNDkvt4Ue+zFi+cuI7jVzP4LOldCU=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-2e53882cf8306e277ea0d07dbb6117f926c38f6c.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-8ea4ea72d7b478cc437d5b2e6841998ad79f1396.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-5c60c478b1e0f90d149f11ed15aa52edd2996882.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-30e75eead7a0b9c0c4bf82707cbb7e5ab8958275.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="826cbddbd868f774d2e661bb4f461de5">

        <link data-pjax-transient rel='permalink' href='/aFarkas/html5shiv/blob/e5da0a90797ae8b236d5901fe7b7b8b55b220847/src/html5shiv.js'>
    <meta property="og:title" content="html5shiv"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/aFarkas/html5shiv"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/5c4f4e081b98517cf7c5b21f47d9fe33?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="html5shiv - This script is the defacto way to enable use of HTML5 sectioning elements in legacy Internet Explorer."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="aFarkas/html5shiv"/>

    <meta name="description" content="html5shiv - This script is the defacto way to enable use of HTML5 sectioning elements in legacy Internet Explorer." />


    <meta content="188254" name="octolytics-dimension-user_id" /><meta content="aFarkas" name="octolytics-dimension-user_login" /><meta content="1358497" name="octolytics-dimension-repository_id" /><meta content="aFarkas/html5shiv" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1358497" name="octolytics-dimension-repository_network_root_id" /><meta content="aFarkas/html5shiv" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/aFarkas/html5shiv/commits/master.atom" rel="alternate" title="Recent Commits to html5shiv:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob windows vis-public env-production  ">
    <div id="wrapper">

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
      <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2FaFarkas%2Fhtml5shiv%2Fblob%2Fmaster%2Fsrc%2Fhtml5shiv.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="http://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
      data-repo="aFarkas/html5shiv"
      data-branch="master"
      data-sha="e32ea3e75484b58717ad8aa7e3b3258b0ba932d7"
  >

    <input type="hidden" name="nwo" value="aFarkas/html5shiv" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
    </div>

  </div>
</div>


      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2FaFarkas%2Fhtml5shiv"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="octicon octicon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/aFarkas/html5shiv/stargazers">
        2,529
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2FaFarkas%2Fhtml5shiv"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/aFarkas/html5shiv/network" class="social-count">
        473
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/aFarkas" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">aFarkas</span>
                  </a></span> /
                <strong><a href="/aFarkas/html5shiv" class="js-current-repository">html5shiv</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/aFarkas/html5shiv/pulse" class="js-selected-navigation-item " data-selected-links="pulse /aFarkas/html5shiv/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/aFarkas/html5shiv" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /aFarkas/html5shiv">Code</a></li>
    <li><a href="/aFarkas/html5shiv/network" class="js-selected-navigation-item " data-selected-links="repo_network /aFarkas/html5shiv/network">Network</a></li>
    <li><a href="/aFarkas/html5shiv/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /aFarkas/html5shiv/pulls">Pull Requests <span class='counter'>3</span></a></li>

      <li><a href="/aFarkas/html5shiv/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /aFarkas/html5shiv/issues">Issues <span class='counter'>14</span></a></li>

      <li><a href="/aFarkas/html5shiv/wiki" class="js-selected-navigation-item " data-selected-links="repo_wiki /aFarkas/html5shiv/wiki">Wiki</a></li>


    <li><a href="/aFarkas/html5shiv/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /aFarkas/html5shiv/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/aFarkas/html5shiv/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /aFarkas/html5shiv/tags">Tags <span class="counter ">11</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="octicon octicon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/defineProperty/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="defineProperty" rel="nofollow" title="defineProperty">defineProperty</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/gh-pages/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/iepp-htc/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="iepp-htc" rel="nofollow" title="iepp-htc">iepp-htc</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/innershiv/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="innershiv" rel="nofollow" title="innershiv">innershiv</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/master/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/3.6.2pre/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="3.6.2pre" rel="nofollow" title="3.6.2pre">3.6.2pre</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/3.6.2/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="3.6.2" rel="nofollow" title="3.6.2">3.6.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/3.6.1/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="3.6.1" rel="nofollow" title="3.6.1">3.6.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/3.6/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="3.6" rel="nofollow" title="3.6">3.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/3.5/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="3.5" rel="nofollow" title="3.5">3.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/3.4/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="3.4" rel="nofollow" title="3.4">3.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/3.3/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="3.3" rel="nofollow" title="3.3">3.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/3.2/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="3.2" rel="nofollow" title="3.2">3.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/3.1/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="3.1" rel="nofollow" title="3.1">3.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/2.2/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="2.2" rel="nofollow" title="2.2">2.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/aFarkas/html5shiv/blob/2.1/src/html5shiv.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="2.1" rel="nofollow" title="2.1">2.1</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/aFarkas/html5shiv" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /aFarkas/html5shiv">Files</a></li>
    <li><a href="/aFarkas/html5shiv/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /aFarkas/html5shiv/commits/master">Commits</a></li>
    <li><a href="/aFarkas/html5shiv/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /aFarkas/html5shiv/branches" rel="nofollow">Branches <span class="counter ">5</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ef4348510f523911c1d42ac8e083e935 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:ef4348510f523911c1d42ac8e083e935 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/aFarkas/html5shiv" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">html5shiv</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/aFarkas/html5shiv/tree/master/src" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><strong class="final-path">html5shiv.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="src/html5shiv.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>

      <a href="/aFarkas/html5shiv/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/6a2bddfa738762e3653bd74c3587bc59?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/nelsonmenezes" rel="author">nelsonmenezes</a></span>
    <time class="js-relative-date" datetime="2013-05-15T06:05:42-07:00" title="2013-05-15 06:05:42">May 15, 2013</time>
    <div class="commit-title">
        <a href="/aFarkas/html5shiv/commit/51da98dabd3c537891b7fe6114633fb10de52473" class="message">Added support for dialog element</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>7</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="aFarkas" href="/aFarkas/html5shiv/commits/master/src/html5shiv.js?author=aFarkas"><img height="20" src="https://secure.gravatar.com/avatar/5c4f4e081b98517cf7c5b21f47d9fe33?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jonathantneal" href="/aFarkas/html5shiv/commits/master/src/html5shiv.js?author=jonathantneal"><img height="20" src="https://secure.gravatar.com/avatar/2889096995a38fa697ab83d8b59a5637?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jdalton" href="/aFarkas/html5shiv/commits/master/src/html5shiv.js?author=jdalton"><img height="20" src="https://secure.gravatar.com/avatar/299a3d891ff1920b69c364d061007043?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="paulirish" href="/aFarkas/html5shiv/commits/master/src/html5shiv.js?author=paulirish"><img height="20" src="https://secure.gravatar.com/avatar/ffe68d6f71b225f7661d33f2a8908281?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mathiasbynens" href="/aFarkas/html5shiv/commits/master/src/html5shiv.js?author=mathiasbynens"><img height="20" src="https://secure.gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="nelsonmenezes" href="/aFarkas/html5shiv/commits/master/src/html5shiv.js?author=nelsonmenezes"><img height="20" src="https://secure.gravatar.com/avatar/6a2bddfa738762e3653bd74c3587bc59?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="brianblakely" href="/aFarkas/html5shiv/commits/master/src/html5shiv.js?author=brianblakely"><img height="20" src="https://secure.gravatar.com/avatar/9481d4984e85f636fd5911554c4ef885?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5c4f4e081b98517cf7c5b21f47d9fe33?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/aFarkas">aFarkas</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/2889096995a38fa697ab83d8b59a5637?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jonathantneal">jonathantneal</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/299a3d891ff1920b69c364d061007043?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jdalton">jdalton</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/ffe68d6f71b225f7661d33f2a8908281?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/paulirish">paulirish</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mathiasbynens">mathiasbynens</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/6a2bddfa738762e3653bd74c3587bc59?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/nelsonmenezes">nelsonmenezes</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/9481d4984e85f636fd5911554c4ef885?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/brianblakely">brianblakely</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/aFarkas/html5shiv/blob/e5da0a90797ae8b236d5901fe7b7b8b55b220847/src/html5shiv.js" data-title="html5shiv/src/html5shiv.js at master · aFarkas/html5shiv · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>302 lines (259 sloc)</span>
                <span>9.512 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/aFarkas/html5shiv/raw/master/src/html5shiv.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/aFarkas/html5shiv/blame/master/src/html5shiv.js" class="button minibutton ">Blame</a>
                  <a href="/aFarkas/html5shiv/commits/master/src/html5shiv.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm">* @preserve HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed</span></div><div class='line' id='LC3'><span class="cm">*/</span></div><div class='line' id='LC4'><span class="p">;(</span><span class="kd">function</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">document</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC5'><span class="cm">/*jshint evil:true */</span></div><div class='line' id='LC6'>&nbsp;&nbsp;<span class="cm">/** version */</span></div><div class='line' id='LC7'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">version</span> <span class="o">=</span> <span class="s1">&#39;3.6.2&#39;</span><span class="p">;</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'>&nbsp;&nbsp;<span class="cm">/** Preset options */</span></div><div class='line' id='LC10'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">html5</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'>&nbsp;&nbsp;<span class="cm">/** Used to skip problem elements */</span></div><div class='line' id='LC13'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">reSkip</span> <span class="o">=</span> <span class="sr">/^&lt;|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i</span><span class="p">;</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'>&nbsp;&nbsp;<span class="cm">/** Not all elements can be cloned in IE **/</span></div><div class='line' id='LC16'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">saveClones</span> <span class="o">=</span> <span class="sr">/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i</span><span class="p">;</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="cm">/** Detect whether the browser supports default html5 styles */</span></div><div class='line' id='LC19'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">supportsHtml5Styles</span><span class="p">;</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'>&nbsp;&nbsp;<span class="cm">/** Name of the expando, to work with multiple documents or to re-shiv one document */</span></div><div class='line' id='LC22'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">expando</span> <span class="o">=</span> <span class="s1">&#39;_html5shiv&#39;</span><span class="p">;</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="cm">/** The id for the the documents expando */</span></div><div class='line' id='LC25'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">expanID</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="cm">/** Cached data for each document */</span></div><div class='line' id='LC28'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">expandoData</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'>&nbsp;&nbsp;<span class="cm">/** Detect whether the browser supports unknown elements */</span></div><div class='line' id='LC31'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">supportsUnknownElements</span><span class="p">;</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>&nbsp;&nbsp;<span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;a&#39;</span><span class="p">);</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="s1">&#39;&lt;xyz&gt;&lt;/xyz&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">supportsHtml5Styles</span> <span class="o">=</span> <span class="p">(</span><span class="s1">&#39;hidden&#39;</span> <span class="k">in</span> <span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">supportsUnknownElements</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">||</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// assign a false positive if unable to shiv</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">)(</span><span class="s1">&#39;a&#39;</span><span class="p">);</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">frag</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createDocumentFragment</span><span class="p">();</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">typeof</span> <span class="nx">frag</span><span class="p">.</span><span class="nx">cloneNode</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">||</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">typeof</span> <span class="nx">frag</span><span class="p">.</span><span class="nx">createDocumentFragment</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">||</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">typeof</span> <span class="nx">frag</span><span class="p">.</span><span class="nx">createElement</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}());</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// assign a false positive if detection fails =&gt; unable to shiv</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">supportsHtml5Styles</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">supportsUnknownElements</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="p">}());</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>&nbsp;&nbsp;<span class="cm">/*--------------------------------------------------------------------------*/</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC61'><span class="cm">   * Creates a style sheet with the given CSS text and adds it to the document.</span></div><div class='line' id='LC62'><span class="cm">   * @private</span></div><div class='line' id='LC63'><span class="cm">   * @param {Document} ownerDocument The document.</span></div><div class='line' id='LC64'><span class="cm">   * @param {String} cssText The CSS text.</span></div><div class='line' id='LC65'><span class="cm">   * @returns {StyleSheet} The style element.</span></div><div class='line' id='LC66'><span class="cm">   */</span></div><div class='line' id='LC67'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">addStyleSheet</span><span class="p">(</span><span class="nx">ownerDocument</span><span class="p">,</span> <span class="nx">cssText</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;p&#39;</span><span class="p">),</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">parent</span> <span class="o">=</span> <span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s1">&#39;head&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span> <span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">;</span></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">p</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="s1">&#39;x&lt;style&gt;&#39;</span> <span class="o">+</span> <span class="nx">cssText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/style&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">p</span><span class="p">.</span><span class="nx">lastChild</span><span class="p">,</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span></div><div class='line' id='LC73'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC76'><span class="cm">   * Returns the value of `html5.elements` as an array.</span></div><div class='line' id='LC77'><span class="cm">   * @private</span></div><div class='line' id='LC78'><span class="cm">   * @returns {Array} An array of shived element node names.</span></div><div class='line' id='LC79'><span class="cm">   */</span></div><div class='line' id='LC80'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">getElements</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">elements</span> <span class="o">=</span> <span class="nx">html5</span><span class="p">.</span><span class="nx">elements</span><span class="p">;</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">typeof</span> <span class="nx">elements</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span> <span class="o">?</span> <span class="nx">elements</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39; &#39;</span><span class="p">)</span> <span class="o">:</span> <span class="nx">elements</span><span class="p">;</span></div><div class='line' id='LC83'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC86'><span class="cm">   * Returns the data associated to the given document</span></div><div class='line' id='LC87'><span class="cm">   * @private</span></div><div class='line' id='LC88'><span class="cm">   * @param {Document} ownerDocument The document.</span></div><div class='line' id='LC89'><span class="cm">   * @returns {Object} An object of data.</span></div><div class='line' id='LC90'><span class="cm">   */</span></div><div class='line' id='LC91'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">getExpandoData</span><span class="p">(</span><span class="nx">ownerDocument</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">expandoData</span><span class="p">[</span><span class="nx">ownerDocument</span><span class="p">[</span><span class="nx">expando</span><span class="p">]];</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">expanID</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ownerDocument</span><span class="p">[</span><span class="nx">expando</span><span class="p">]</span> <span class="o">=</span> <span class="nx">expanID</span><span class="p">;</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">expandoData</span><span class="p">[</span><span class="nx">expanID</span><span class="p">]</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC100'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC103'><span class="cm">   * returns a shived element for the given nodeName and document</span></div><div class='line' id='LC104'><span class="cm">   * @memberOf html5</span></div><div class='line' id='LC105'><span class="cm">   * @param {String} nodeName name of the element</span></div><div class='line' id='LC106'><span class="cm">   * @param {Document} ownerDocument The context document.</span></div><div class='line' id='LC107'><span class="cm">   * @returns {Object} The shived element.</span></div><div class='line' id='LC108'><span class="cm">   */</span></div><div class='line' id='LC109'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">createElement</span><span class="p">(</span><span class="nx">nodeName</span><span class="p">,</span> <span class="nx">ownerDocument</span><span class="p">,</span> <span class="nx">data</span><span class="p">){</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">ownerDocument</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ownerDocument</span> <span class="o">=</span> <span class="nb">document</span><span class="p">;</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">supportsUnknownElements</span><span class="p">){</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">nodeName</span><span class="p">);</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">getExpandoData</span><span class="p">(</span><span class="nx">ownerDocument</span><span class="p">);</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">node</span><span class="p">;</span></div><div class='line' id='LC120'><br/></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">nodeName</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">node</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">nodeName</span><span class="p">].</span><span class="nx">cloneNode</span><span class="p">();</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">saveClones</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">nodeName</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">node</span> <span class="o">=</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">nodeName</span><span class="p">]</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">createElem</span><span class="p">(</span><span class="nx">nodeName</span><span class="p">)).</span><span class="nx">cloneNode</span><span class="p">();</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">node</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">createElem</span><span class="p">(</span><span class="nx">nodeName</span><span class="p">);</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Avoid adding some elements to fragments in IE &lt; 9 because</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// * Attributes like `name` or `type` cannot be set/changed once an element</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   is inserted into a document/fragment</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// * Link elements with `src` attributes that are inaccessible, as with</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   a 403 response, will cause the tab/window to crash</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// * Script elements appended to fragments will execute when their `src`</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   or `text` property is set</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">node</span><span class="p">.</span><span class="nx">canHaveChildren</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">reSkip</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">nodeName</span><span class="p">)</span> <span class="o">?</span> <span class="nx">data</span><span class="p">.</span><span class="nx">frag</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">node</span><span class="p">)</span> <span class="o">:</span> <span class="nx">node</span><span class="p">;</span></div><div class='line' id='LC137'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC138'><br/></div><div class='line' id='LC139'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC140'><span class="cm">   * returns a shived DocumentFragment for the given document</span></div><div class='line' id='LC141'><span class="cm">   * @memberOf html5</span></div><div class='line' id='LC142'><span class="cm">   * @param {Document} ownerDocument The context document.</span></div><div class='line' id='LC143'><span class="cm">   * @returns {Object} The shived DocumentFragment.</span></div><div class='line' id='LC144'><span class="cm">   */</span></div><div class='line' id='LC145'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">createDocumentFragment</span><span class="p">(</span><span class="nx">ownerDocument</span><span class="p">,</span> <span class="nx">data</span><span class="p">){</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">ownerDocument</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ownerDocument</span> <span class="o">=</span> <span class="nb">document</span><span class="p">;</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">supportsUnknownElements</span><span class="p">){</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">createDocumentFragment</span><span class="p">();</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span> <span class="o">||</span> <span class="nx">getExpandoData</span><span class="p">(</span><span class="nx">ownerDocument</span><span class="p">);</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">clone</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">frag</span><span class="p">.</span><span class="nx">cloneNode</span><span class="p">(),</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">elems</span> <span class="o">=</span> <span class="nx">getElements</span><span class="p">(),</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">l</span> <span class="o">=</span> <span class="nx">elems</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span><span class="p">(;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">l</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clone</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">elems</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">clone</span><span class="p">;</span></div><div class='line' id='LC161'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC162'><br/></div><div class='line' id='LC163'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC164'><span class="cm">   * Shivs the `createElement` and `createDocumentFragment` methods of the document.</span></div><div class='line' id='LC165'><span class="cm">   * @private</span></div><div class='line' id='LC166'><span class="cm">   * @param {Document|DocumentFragment} ownerDocument The document.</span></div><div class='line' id='LC167'><span class="cm">   * @param {Object} data of the document.</span></div><div class='line' id='LC168'><span class="cm">   */</span></div><div class='line' id='LC169'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">shivMethods</span><span class="p">(</span><span class="nx">ownerDocument</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">data</span><span class="p">.</span><span class="nx">cache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">cache</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">createElem</span> <span class="o">=</span> <span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">createElement</span><span class="p">;</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">createFrag</span> <span class="o">=</span> <span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">createDocumentFragment</span><span class="p">;</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">frag</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">createFrag</span><span class="p">();</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'><br/></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">createElement</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">nodeName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//abort shiv</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">html5</span><span class="p">.</span><span class="nx">shivMethods</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">data</span><span class="p">.</span><span class="nx">createElem</span><span class="p">(</span><span class="nx">nodeName</span><span class="p">);</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">createElement</span><span class="p">(</span><span class="nx">nodeName</span><span class="p">,</span> <span class="nx">ownerDocument</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">createDocumentFragment</span> <span class="o">=</span> <span class="nb">Function</span><span class="p">(</span><span class="s1">&#39;h,f&#39;</span><span class="p">,</span> <span class="s1">&#39;return function(){&#39;</span> <span class="o">+</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;var n=f.cloneNode(),c=n.createElement;&#39;</span> <span class="o">+</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;h.shivMethods&amp;&amp;(&#39;</span> <span class="o">+</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// unroll the `createElement` calls</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getElements</span><span class="p">().</span><span class="nx">join</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\w+/g</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">nodeName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">createElem</span><span class="p">(</span><span class="nx">nodeName</span><span class="p">);</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">frag</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">nodeName</span><span class="p">);</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;c(&quot;&#39;</span> <span class="o">+</span> <span class="nx">nodeName</span> <span class="o">+</span> <span class="s1">&#39;&quot;)&#39;</span><span class="p">;</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span> <span class="o">+</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;);return n}&#39;</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">)(</span><span class="nx">html5</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">frag</span><span class="p">);</span></div><div class='line' id='LC197'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC198'><br/></div><div class='line' id='LC199'>&nbsp;&nbsp;<span class="cm">/*--------------------------------------------------------------------------*/</span></div><div class='line' id='LC200'><br/></div><div class='line' id='LC201'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC202'><span class="cm">   * Shivs the given document.</span></div><div class='line' id='LC203'><span class="cm">   * @memberOf html5</span></div><div class='line' id='LC204'><span class="cm">   * @param {Document} ownerDocument The document to shiv.</span></div><div class='line' id='LC205'><span class="cm">   * @returns {Document} The shived document.</span></div><div class='line' id='LC206'><span class="cm">   */</span></div><div class='line' id='LC207'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">shivDocument</span><span class="p">(</span><span class="nx">ownerDocument</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">ownerDocument</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ownerDocument</span> <span class="o">=</span> <span class="nb">document</span><span class="p">;</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">getExpandoData</span><span class="p">(</span><span class="nx">ownerDocument</span><span class="p">);</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">html5</span><span class="p">.</span><span class="nx">shivCSS</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">supportsHtml5Styles</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">data</span><span class="p">.</span><span class="nx">hasCSS</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">hasCSS</span> <span class="o">=</span> <span class="o">!!</span><span class="nx">addStyleSheet</span><span class="p">(</span><span class="nx">ownerDocument</span><span class="p">,</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// corrects block display not defined in IE6/7/8/9</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}&#39;</span> <span class="o">+</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// adds styling not present in IE6/7/8/9</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;mark{background:#FF0;color:#000}&#39;</span> <span class="o">+</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// hides non-rendered elements</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;template{display:none}&#39;</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">supportsUnknownElements</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shivMethods</span><span class="p">(</span><span class="nx">ownerDocument</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ownerDocument</span><span class="p">;</span></div><div class='line' id='LC227'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'>&nbsp;&nbsp;<span class="cm">/*--------------------------------------------------------------------------*/</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC232'><span class="cm">   * The `html5` object is exposed so that more elements can be shived and</span></div><div class='line' id='LC233'><span class="cm">   * existing shiving can be detected on iframes.</span></div><div class='line' id='LC234'><span class="cm">   * @type Object</span></div><div class='line' id='LC235'><span class="cm">   * @example</span></div><div class='line' id='LC236'><span class="cm">   *</span></div><div class='line' id='LC237'><span class="cm">   * // options can be changed before the script is included</span></div><div class='line' id='LC238'><span class="cm">   * html5 = { &#39;elements&#39;: &#39;mark section&#39;, &#39;shivCSS&#39;: false, &#39;shivMethods&#39;: false };</span></div><div class='line' id='LC239'><span class="cm">   */</span></div><div class='line' id='LC240'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">html5</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC241'><br/></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC243'><span class="cm">     * An array or space separated string of node names of the elements to shiv.</span></div><div class='line' id='LC244'><span class="cm">     * @memberOf html5</span></div><div class='line' id='LC245'><span class="cm">     * @type Array|String</span></div><div class='line' id='LC246'><span class="cm">     */</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;elements&#39;</span><span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">elements</span> <span class="o">||</span> <span class="s1">&#39;abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video&#39;</span><span class="p">,</span></div><div class='line' id='LC248'><br/></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC250'><span class="cm">     * current version of html5shiv</span></div><div class='line' id='LC251'><span class="cm">     */</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;version&#39;</span><span class="o">:</span> <span class="nx">version</span><span class="p">,</span></div><div class='line' id='LC253'><br/></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC255'><span class="cm">     * A flag to indicate that the HTML5 style sheet should be inserted.</span></div><div class='line' id='LC256'><span class="cm">     * @memberOf html5</span></div><div class='line' id='LC257'><span class="cm">     * @type Boolean</span></div><div class='line' id='LC258'><span class="cm">     */</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;shivCSS&#39;</span><span class="o">:</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">shivCSS</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">),</span></div><div class='line' id='LC260'><br/></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC262'><span class="cm">     * Is equal to true if a browser supports creating unknown/HTML5 elements</span></div><div class='line' id='LC263'><span class="cm">     * @memberOf html5</span></div><div class='line' id='LC264'><span class="cm">     * @type boolean</span></div><div class='line' id='LC265'><span class="cm">     */</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;supportsUnknownElements&#39;</span><span class="o">:</span> <span class="nx">supportsUnknownElements</span><span class="p">,</span></div><div class='line' id='LC267'><br/></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC269'><span class="cm">     * A flag to indicate that the document&#39;s `createElement` and `createDocumentFragment`</span></div><div class='line' id='LC270'><span class="cm">     * methods should be overwritten.</span></div><div class='line' id='LC271'><span class="cm">     * @memberOf html5</span></div><div class='line' id='LC272'><span class="cm">     * @type Boolean</span></div><div class='line' id='LC273'><span class="cm">     */</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;shivMethods&#39;</span><span class="o">:</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">shivMethods</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">),</span></div><div class='line' id='LC275'><br/></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC277'><span class="cm">     * A string to describe the type of `html5` object (&quot;default&quot; or &quot;default print&quot;).</span></div><div class='line' id='LC278'><span class="cm">     * @memberOf html5</span></div><div class='line' id='LC279'><span class="cm">     * @type String</span></div><div class='line' id='LC280'><span class="cm">     */</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;type&#39;</span><span class="o">:</span> <span class="s1">&#39;default&#39;</span><span class="p">,</span></div><div class='line' id='LC282'><br/></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// shivs the document according to the specified `html5` object options</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;shivDocument&#39;</span><span class="o">:</span> <span class="nx">shivDocument</span><span class="p">,</span></div><div class='line' id='LC285'><br/></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//creates a shived element</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createElement</span><span class="o">:</span> <span class="nx">createElement</span><span class="p">,</span></div><div class='line' id='LC288'><br/></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//creates a shived documentFragment</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">createDocumentFragment</span><span class="o">:</span> <span class="nx">createDocumentFragment</span></div><div class='line' id='LC291'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC292'><br/></div><div class='line' id='LC293'>&nbsp;&nbsp;<span class="cm">/*--------------------------------------------------------------------------*/</span></div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'>&nbsp;&nbsp;<span class="c1">// expose html5</span></div><div class='line' id='LC296'>&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">html5</span> <span class="o">=</span> <span class="nx">html5</span><span class="p">;</span></div><div class='line' id='LC297'><br/></div><div class='line' id='LC298'>&nbsp;&nbsp;<span class="c1">// shiv the document</span></div><div class='line' id='LC299'>&nbsp;&nbsp;<span class="nx">shivDocument</span><span class="p">(</span><span class="nb">document</span><span class="p">);</span></div><div class='line' id='LC300'><br/></div><div class='line' id='LC301'><span class="p">}(</span><span class="k">this</span><span class="p">,</span> <span class="nb">document</span><span class="p">));</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="/about">About us</a></dd>
        <dd><a href="/blog">Blog</a></dd>
        <dd><a href="/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.04648s from fe2.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="/site/terms">Terms of Service</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/aFarkas/html5shiv/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="octicon octicon-remove-close ajax-error-dismiss"></a>
    </div>

    
    <span id='server_response_time' data-time='0.04688' data-host='fe2'></span>
    
  </body>
</html>

