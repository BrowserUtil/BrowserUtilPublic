import{v as He,c as _r,a as kr}from"./runtime-dom.esm-bundler.DdJ6YMes.js";import{t as Cr,I as Tr}from"./utils.Cnprqvd4.js";import{b as Sr,a as Sn}from"./jsObject.B73ntPK4.js";import{C as jr}from"./CopyButton.DwTyOc5m.js";import{_ as Er}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{c as F,a as h,n as ie,t as E,w as Ie,b as ne,F as Ue,d as en,r as jn,e as Ir,f as Or,g as En,o as Lr,h as Mr,i as he,j as B,k as D}from"./runtime-core.esm-bundler.uSHGqpAL.js";const Xe="browserutil:json-to-yaml:history",rr=5,Rr=1e5,Be={indent:2,sortKeys:!1,noArrayIndent:!1,quotingType:"auto",lineWidth:-1,forceQuotes:!1},Ke={indent:2,quote:"single",unquoteKeys:!0,trailingComma:!0,declaration:"const"},In={en:{json:`{
  "apiVersion": "apps/v1",
  "kind": "Deployment",
  "metadata": {
    "name": "browserutil-service",
    "labels": {
      "app": "browserutil",
      "env": "production"
    }
  },
  "spec": {
    "replicas": 3,
    "strategy": {
      "type": "RollingUpdate"
    },
    "template": {
      "metadata": {
        "labels": {
          "app": "browserutil"
        }
      },
      "spec": {
        "containers": [
          {
            "name": "web",
            "image": "browserutil:latest",
            "ports": [
              {
                "containerPort": 8080,
                "protocol": "TCP"
              }
            ],
            "resources": {
              "limits": {
                "cpu": "500m",
                "memory": "512Mi"
              }
            }
          }
        ]
      }
    }
  }
}`,yaml:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: browserutil-service
  labels:
    app: browserutil
    env: production
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: browserutil
    spec:
      containers:
        - name: web
          image: browserutil:latest
          ports:
            - containerPort: 8080
              protocol: TCP
          resources:
            limits:
              cpu: 500m
              memory: 512Mi
`,js:`// Production Service Deployment Configuration
const deploymentConfig = {
  apiVersion: 'apps/v1',
  kind: 'Deployment',
  metadata: {
    name: 'browserutil-service',
    labels: {
      app: 'browserutil',
      env: 'production', // active target
    },
  },
  spec: {
    replicas: 3,
    strategy: {
      type: 'RollingUpdate',
    },
    template: {
      metadata: {
        labels: {
          app: 'browserutil',
        },
      },
      spec: {
        containers: [
          {
            name: 'web',
            image: 'browserutil:latest',
            ports: [
              {
                containerPort: 8080,
                protocol: 'TCP',
              },
            ],
            resources: {
              limits: {
                cpu: '500m',
                memory: '512Mi',
              },
            },
          },
        ],
      },
    },
  },
};
export default deploymentConfig;`},zh:{json:`{
  "apiVersion": "apps/v1",
  "kind": "Deployment",
  "metadata": {
    "name": "browserutil-service",
    "labels": {
      "app": "browserutil",
      "env": "production",
      "description": "纯前端本地安全工具集"
    }
  },
  "spec": {
    "replicas": 3,
    "strategy": {
      "type": "RollingUpdate"
    },
    "template": {
      "metadata": {
        "labels": {
          "app": "browserutil"
        }
      },
      "spec": {
        "containers": [
          {
            "name": "web",
            "image": "browserutil:latest",
            "ports": [
              {
                "containerPort": 8080,
                "protocol": "TCP"
              }
            ],
            "resources": {
              "limits": {
                "cpu": "500m",
                "memory": "512Mi"
              }
            }
          }
        ]
      }
    }
  }
}`,yaml:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: browserutil-service
  labels:
    app: browserutil
    env: production
    description: 纯前端本地安全工具集
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: browserutil
    spec:
      containers:
        - name: web
          image: browserutil:latest
          ports:
            - containerPort: 8080
              protocol: TCP
          resources:
            limits:
              cpu: 500m
              memory: 512Mi
`,js:`// 生产环境应用部署配置
const deploymentConfig = {
  apiVersion: 'apps/v1',
  kind: 'Deployment',
  metadata: {
    name: 'browserutil-service',
    labels: {
      app: 'browserutil',
      env: 'production',
      description: '纯前端本地安全工具集', // 本地运行不上传
    },
  },
  spec: {
    replicas: 3,
    strategy: {
      type: 'RollingUpdate',
    },
    template: {
      metadata: {
        labels: {
          app: 'browserutil',
        },
      },
      spec: {
        containers: [
          {
            name: 'web',
            image: 'browserutil:latest',
            ports: [
              {
                containerPort: 8080,
                protocol: 'TCP',
              },
            ],
            resources: {
              limits: {
                cpu: '500m',
                memory: '512Mi',
              },
            },
          },
        ],
      },
    },
  },
};
export default deploymentConfig;`},ja:{json:`{
  "apiVersion": "apps/v1",
  "kind": "Deployment",
  "metadata": {
    "name": "browserutil-service",
    "labels": {
      "app": "browserutil",
      "env": "production",
      "description": "ローカル完結型オンラインツール"
    }
  },
  "spec": {
    "replicas": 3,
    "strategy": {
      "type": "RollingUpdate"
    },
    "template": {
      "metadata": {
        "labels": {
          "app": "browserutil"
        }
      },
      "spec": {
        "containers": [
          {
            "name": "web",
            "image": "browserutil:latest",
            "ports": [
              {
                "containerPort": 8080,
                "protocol": "TCP"
              }
            ],
            "resources": {
              "limits": {
                "cpu": "500m",
                "memory": "512Mi"
              }
            }
          }
        ]
      }
    }
  }
}`,yaml:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: browserutil-service
  labels:
    app: browserutil
    env: production
    description: ローカル完結型オンラインツール
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: browserutil
    spec:
      containers:
        - name: web
          image: browserutil:latest
          ports:
            - containerPort: 8080
              protocol: TCP
          resources:
            limits:
              cpu: 500m
              memory: 512Mi
`,js:`// 本番環境サービスデプロイ設定
const deploymentConfig = {
  apiVersion: 'apps/v1',
  kind: 'Deployment',
  metadata: {
    name: 'browserutil-service',
    labels: {
      app: 'browserutil',
      env: 'production',
      description: 'ローカル完結型オンラインツール',
    },
  },
  spec: {
    replicas: 3,
    strategy: {
      type: 'RollingUpdate',
    },
    template: {
      metadata: {
        labels: {
          app: 'browserutil',
        },
      },
      spec: {
        containers: [
          {
            name: 'web',
            image: 'browserutil:latest',
            ports: [
              {
                containerPort: 8080,
                protocol: 'TCP',
              },
            ],
            resources: {
              limits: {
                cpu: '500m',
                memory: '512Mi',
              },
            },
          },
        ],
      },
    },
  },
};
export default deploymentConfig;`},ko:{json:`{
  "apiVersion": "apps/v1",
  "kind": "Deployment",
  "metadata": {
    "name": "browserutil-service",
    "labels": {
      "app": "browserutil",
      "env": "production",
      "description": "로컬 실행 개발자 도구"
    }
  },
  "spec": {
    "replicas": 3,
    "strategy": {
      "type": "RollingUpdate"
    },
    "template": {
      "metadata": {
        "labels": {
          "app": "browserutil"
        }
      },
      "spec": {
        "containers": [
          {
            "name": "web",
            "image": "browserutil:latest",
            "ports": [
              {
                "containerPort": 8080,
                "protocol": "TCP"
              }
            ],
            "resources": {
              "limits": {
                "cpu": "500m",
                "memory": "512Mi"
              }
            }
          }
        ]
      }
    }
  }
}`,yaml:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: browserutil-service
  labels:
    app: browserutil
    env: production
    description: 로컬 실행 개발자 도구
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: browserutil
    spec:
      containers:
        - name: web
          image: browserutil:latest
          ports:
            - containerPort: 8080
              protocol: TCP
          resources:
            limits:
              cpu: 500m
              memory: 512Mi
`,js:`// 프로덕션 서비스 배포 설정
const deploymentConfig = {
  apiVersion: 'apps/v1',
  kind: 'Deployment',
  metadata: {
    name: 'browserutil-service',
    labels: {
      app: 'browserutil',
      env: 'production',
      description: '로컬 실행 개발자 도구',
    },
  },
  spec: {
    replicas: 3,
    strategy: {
      type: 'RollingUpdate',
    },
    template: {
      metadata: {
        labels: {
          app: 'browserutil',
        },
      },
      spec: {
        containers: [
          {
            name: 'web',
            image: 'browserutil:latest',
            ports: [
              {
                containerPort: 8080,
                protocol: 'TCP',
              },
            ],
            resources: {
              limits: {
                cpu: '500m',
                memory: '512Mi',
              },
            },
          },
        ],
      },
    },
  },
};
export default deploymentConfig;`},ru:{json:`{
  "apiVersion": "apps/v1",
  "kind": "Deployment",
  "metadata": {
    "name": "browserutil-service",
    "labels": {
      "app": "browserutil",
      "env": "production"
    }
  },
  "spec": {
    "replicas": 3,
    "strategy": {
      "type": "RollingUpdate"
    },
    "template": {
      "metadata": {
        "labels": {
          "app": "browserutil"
        }
      },
      "spec": {
        "containers": [
          {
            "name": "web",
            "image": "browserutil:latest",
            "ports": [
              {
                "containerPort": 8080,
                "protocol": "TCP"
              }
            ],
            "resources": {
              "limits": {
                "cpu": "500m",
                "memory": "512Mi"
              }
            }
          }
        ]
      }
    }
  }
}`,yaml:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: browserutil-service
  labels:
    app: browserutil
    env: production
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: browserutil
    spec:
      containers:
        - name: web
          image: browserutil:latest
          ports:
            - containerPort: 8080
              protocol: TCP
          resources:
            limits:
              cpu: 500m
              memory: 512Mi
`,js:`// Конфигурация развертывания сервиса
const deploymentConfig = {
  apiVersion: 'apps/v1',
  kind: 'Deployment',
  metadata: {
    name: 'browserutil-service',
    labels: {
      app: 'browserutil',
      env: 'production',
    },
  },
  spec: {
    replicas: 3,
    strategy: {
      type: 'RollingUpdate',
    },
    template: {
      metadata: {
        labels: {
          app: 'browserutil',
        },
      },
      spec: {
        containers: [
          {
            name: 'web',
            image: 'browserutil:latest',
            ports: [
              {
                containerPort: 8080,
                protocol: 'TCP',
              },
            ],
            resources: {
              limits: {
                cpu: '500m',
                memory: '512Mi',
              },
            },
          },
        ],
      },
    },
  },
};
export default deploymentConfig;`},de:{json:`{
  "apiVersion": "apps/v1",
  "kind": "Deployment",
  "metadata": {
    "name": "browserutil-service",
    "labels": {
      "app": "browserutil",
      "env": "production"
    }
  },
  "spec": {
    "replicas": 3,
    "strategy": {
      "type": "RollingUpdate"
    },
    "template": {
      "metadata": {
        "labels": {
          "app": "browserutil"
        }
      },
      "spec": {
        "containers": [
          {
            "name": "web",
            "image": "browserutil:latest",
            "ports": [
              {
                "containerPort": 8080,
                "protocol": "TCP"
              }
            ],
            "resources": {
              "limits": {
                "cpu": "500m",
                "memory": "512Mi"
              }
            }
          }
        ]
      }
    }
  }
}`,yaml:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: browserutil-service
  labels:
    app: browserutil
    env: production
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: browserutil
    spec:
      containers:
        - name: web
          image: browserutil:latest
          ports:
            - containerPort: 8080
              protocol: TCP
          resources:
            limits:
              cpu: 500m
              memory: 512Mi
`,js:`// Bereitstellungskonfiguration für Produktionsumgebung
const deploymentConfig = {
  apiVersion: 'apps/v1',
  kind: 'Deployment',
  metadata: {
    name: 'browserutil-service',
    labels: {
      app: 'browserutil',
      env: 'production',
    },
  },
  spec: {
    replicas: 3,
    strategy: {
      type: 'RollingUpdate',
    },
    template: {
      metadata: {
        labels: {
          app: 'browserutil',
        },
      },
      spec: {
        containers: [
          {
            name: 'web',
            image: 'browserutil:latest',
            ports: [
              {
                containerPort: 8080,
                protocol: 'TCP',
              },
            ],
            resources: {
              limits: {
                cpu: '500m',
                memory: '512Mi',
              },
            },
          },
        ],
      },
    },
  },
};
export default deploymentConfig;`}};function Nr(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var W={},Qe={},_e={},On;function Ve(){if(On)return _e;On=1;function f(o){return typeof o>"u"||o===null}function i(o){return typeof o=="object"&&o!==null}function A(o){return Array.isArray(o)?o:f(o)?[]:[o]}function r(o,u){if(u){const w=Object.keys(u);for(let l=0,a=w.length;l<a;l+=1){const k=w[l];o[k]=u[k]}}return o}function d(o,u){let w="";for(let l=0;l<u;l+=1)w+=o;return w}function g(o){return o===0&&Number.NEGATIVE_INFINITY===1/o}return _e.isNothing=f,_e.isObject=i,_e.toArray=A,_e.repeat=d,_e.isNegativeZero=g,_e.extend=r,_e}var nn,Ln;function Ge(){if(Ln)return nn;Ln=1;function f(A,r){let d="";const g=A.reason||"(unknown reason)";return A.mark?(A.mark.name&&(d+='in "'+A.mark.name+'" '),d+="("+(A.mark.line+1)+":"+(A.mark.column+1)+")",!r&&A.mark.snippet&&(d+=`

`+A.mark.snippet),g+" "+d):g}function i(A,r){Error.call(this),this.name="YAMLException",this.reason=A,this.mark=r,this.message=f(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i.prototype.toString=function(r){return this.name+": "+f(this,r)},nn=i,nn}var rn,Mn;function qr(){if(Mn)return rn;Mn=1;const f=Ve();function i(d,g,o,u,w){let l="",a="";const k=Math.floor(w/2)-1;return u-g>k&&(l=" ... ",g=u-k+l.length),o-u>k&&(a=" ...",o=u+k-a.length),{str:l+d.slice(g,o).replace(/\t/g,"→")+a,pos:u-g+l.length}}function A(d,g){return f.repeat(" ",g-d.length)+d}function r(d,g){if(g=Object.create(g||null),!d.buffer)return null;g.maxLength||(g.maxLength=79),typeof g.indent!="number"&&(g.indent=1),typeof g.linesBefore!="number"&&(g.linesBefore=3),typeof g.linesAfter!="number"&&(g.linesAfter=2);const o=/\r?\n|\r|\0/g,u=[0],w=[];let l,a=-1;for(;l=o.exec(d.buffer);)w.push(l.index),u.push(l.index+l[0].length),d.position<=l.index&&a<0&&(a=u.length-2);a<0&&(a=u.length-1);let k="";const I=Math.min(d.line+g.linesAfter,w.length).toString().length,q=g.maxLength-(g.indent+I+3);for(let P=1;P<=g.linesBefore&&!(a-P<0);P++){const Q=i(d.buffer,u[a-P],w[a-P],d.position-(u[a]-u[a-P]),q);k=f.repeat(" ",g.indent)+A((d.line-P+1).toString(),I)+" | "+Q.str+`
`+k}const $=i(d.buffer,u[a],w[a],d.position,q);k+=f.repeat(" ",g.indent)+A((d.line+1).toString(),I)+" | "+$.str+`
`,k+=f.repeat("-",g.indent+I+3+$.pos)+`^
`;for(let P=1;P<=g.linesAfter&&!(a+P>=w.length);P++){const Q=i(d.buffer,u[a+P],w[a+P],d.position-(u[a]-u[a+P]),q);k+=f.repeat(" ",g.indent)+A((d.line+P+1).toString(),I)+" | "+Q.str+`
`}return k.replace(/\n$/,"")}return rn=r,rn}var tn,Rn;function Z(){if(Rn)return tn;Rn=1;const f=Ge(),i=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],A=["scalar","sequence","mapping"];function r(g){const o={};return g!==null&&Object.keys(g).forEach(function(u){g[u].forEach(function(w){o[String(w)]=u})}),o}function d(g,o){if(o=o||{},Object.keys(o).forEach(function(u){if(i.indexOf(u)===-1)throw new f('Unknown option "'+u+'" is met in definition of "'+g+'" YAML type.')}),this.options=o,this.tag=g,this.kind=o.kind||null,this.resolve=o.resolve||function(){return!0},this.construct=o.construct||function(u){return u},this.instanceOf=o.instanceOf||null,this.predicate=o.predicate||null,this.represent=o.represent||null,this.representName=o.representName||null,this.defaultStyle=o.defaultStyle||null,this.multi=o.multi||!1,this.styleAliases=r(o.styleAliases||null),A.indexOf(this.kind)===-1)throw new f('Unknown kind "'+this.kind+'" is specified for "'+g+'" YAML type.')}return tn=d,tn}var on,Nn;function tr(){if(Nn)return on;Nn=1;const f=Ge(),i=Z();function A(g,o){const u=[];return g[o].forEach(function(w){let l=u.length;u.forEach(function(a,k){a.tag===w.tag&&a.kind===w.kind&&a.multi===w.multi&&(l=k)}),u[l]=w}),u}function r(){const g={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function o(u){u.multi?(g.multi[u.kind].push(u),g.multi.fallback.push(u)):g[u.kind][u.tag]=g.fallback[u.tag]=u}for(let u=0,w=arguments.length;u<w;u+=1)arguments[u].forEach(o);return g}function d(g){return this.extend(g)}return d.prototype.extend=function(o){let u=[],w=[];if(o instanceof i)w.push(o);else if(Array.isArray(o))w=w.concat(o);else if(o&&(Array.isArray(o.implicit)||Array.isArray(o.explicit)))o.implicit&&(u=u.concat(o.implicit)),o.explicit&&(w=w.concat(o.explicit));else throw new f("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");u.forEach(function(a){if(!(a instanceof i))throw new f("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new f("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new f("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),w.forEach(function(a){if(!(a instanceof i))throw new f("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const l=Object.create(d.prototype);return l.implicit=(this.implicit||[]).concat(u),l.explicit=(this.explicit||[]).concat(w),l.compiledImplicit=A(l,"implicit"),l.compiledExplicit=A(l,"explicit"),l.compiledTypeMap=r(l.compiledImplicit,l.compiledExplicit),l},on=d,on}var ln,qn;function ir(){if(qn)return ln;qn=1;const f=Z();return ln=new f("tag:yaml.org,2002:str",{kind:"scalar",construct:function(i){return i!==null?i:""}}),ln}var sn,Pn;function or(){if(Pn)return sn;Pn=1;const f=Z();return sn=new f("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(i){return i!==null?i:[]}}),sn}var cn,Fn;function lr(){if(Fn)return cn;Fn=1;const f=Z();return cn=new f("tag:yaml.org,2002:map",{kind:"mapping",construct:function(i){return i!==null?i:{}}}),cn}var an,Dn;function sr(){if(Dn)return an;Dn=1;const f=tr();return an=new f({explicit:[ir(),or(),lr()]}),an}var un,Yn;function cr(){if(Yn)return un;Yn=1;const f=Z();function i(d){if(d===null)return!0;const g=d.length;return g===1&&d==="~"||g===4&&(d==="null"||d==="Null"||d==="NULL")}function A(){return null}function r(d){return d===null}return un=new f("tag:yaml.org,2002:null",{kind:"scalar",resolve:i,construct:A,predicate:r,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),un}var pn,Hn;function ar(){if(Hn)return pn;Hn=1;const f=Z();function i(d){if(d===null)return!1;const g=d.length;return g===4&&(d==="true"||d==="True"||d==="TRUE")||g===5&&(d==="false"||d==="False"||d==="FALSE")}function A(d){return d==="true"||d==="True"||d==="TRUE"}function r(d){return Object.prototype.toString.call(d)==="[object Boolean]"}return pn=new f("tag:yaml.org,2002:bool",{kind:"scalar",resolve:i,construct:A,predicate:r,represent:{lowercase:function(d){return d?"true":"false"},uppercase:function(d){return d?"TRUE":"FALSE"},camelcase:function(d){return d?"True":"False"}},defaultStyle:"lowercase"}),pn}var fn,Un;function ur(){if(Un)return fn;Un=1;const f=Ve(),i=Z();function A(l){return l>=48&&l<=57||l>=65&&l<=70||l>=97&&l<=102}function r(l){return l>=48&&l<=55}function d(l){return l>=48&&l<=57}function g(l){if(l===null)return!1;const a=l.length;let k=0,I=!1;if(!a)return!1;let q=l[k];if((q==="-"||q==="+")&&(q=l[++k]),q==="0"){if(k+1===a)return!0;if(q=l[++k],q==="b"){for(k++;k<a;k++){if(q=l[k],q!=="0"&&q!=="1")return!1;I=!0}return I&&isFinite(o(l))}if(q==="x"){for(k++;k<a;k++){if(!A(l.charCodeAt(k)))return!1;I=!0}return I&&isFinite(o(l))}if(q==="o"){for(k++;k<a;k++){if(!r(l.charCodeAt(k)))return!1;I=!0}return I&&isFinite(o(l))}}for(;k<a;k++){if(!d(l.charCodeAt(k)))return!1;I=!0}return I?isFinite(o(l)):!1}function o(l){let a=l,k=1,I=a[0];if((I==="-"||I==="+")&&(I==="-"&&(k=-1),a=a.slice(1),I=a[0]),a==="0")return 0;if(I==="0"){if(a[1]==="b")return k*parseInt(a.slice(2),2);if(a[1]==="x")return k*parseInt(a.slice(2),16);if(a[1]==="o")return k*parseInt(a.slice(2),8)}return k*parseInt(a,10)}function u(l){return o(l)}function w(l){return Object.prototype.toString.call(l)==="[object Number]"&&l%1===0&&!f.isNegativeZero(l)}return fn=new i("tag:yaml.org,2002:int",{kind:"scalar",resolve:g,construct:u,predicate:w,represent:{binary:function(l){return l>=0?"0b"+l.toString(2):"-0b"+l.toString(2).slice(1)},octal:function(l){return l>=0?"0o"+l.toString(8):"-0o"+l.toString(8).slice(1)},decimal:function(l){return l.toString(10)},hexadecimal:function(l){return l>=0?"0x"+l.toString(16).toUpperCase():"-0x"+l.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),fn}var dn,Bn;function pr(){if(Bn)return dn;Bn=1;const f=Ve(),i=Z(),A=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),r=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function d(l){return l===null||!A.test(l)?!1:isFinite(parseFloat(l,10))?!0:r.test(l)}function g(l){let a=l.toLowerCase();const k=a[0]==="-"?-1:1;return"+-".indexOf(a[0])>=0&&(a=a.slice(1)),a===".inf"?k===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:a===".nan"?NaN:k*parseFloat(a,10)}const o=/^[-+]?[0-9]+e/;function u(l,a){if(isNaN(l))switch(a){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===l)switch(a){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===l)switch(a){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(f.isNegativeZero(l))return"-0.0";const k=l.toString(10);return o.test(k)?k.replace("e",".e"):k}function w(l){return Object.prototype.toString.call(l)==="[object Number]"&&(l%1!==0||f.isNegativeZero(l))}return dn=new i("tag:yaml.org,2002:float",{kind:"scalar",resolve:d,construct:g,predicate:w,represent:u,defaultStyle:"lowercase"}),dn}var mn,Kn;function fr(){return Kn||(Kn=1,mn=sr().extend({implicit:[cr(),ar(),ur(),pr()]})),mn}var hn,Jn;function dr(){return Jn||(Jn=1,hn=fr()),hn}var gn,Vn;function mr(){if(Vn)return gn;Vn=1;const f=Z(),i=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),A=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function r(o){return o===null?!1:i.exec(o)!==null||A.exec(o)!==null}function d(o){let u=0,w=null,l=i.exec(o);if(l===null&&(l=A.exec(o)),l===null)throw new Error("Date resolve error");const a=+l[1],k=+l[2]-1,I=+l[3];if(!l[4])return new Date(Date.UTC(a,k,I));const q=+l[4],$=+l[5],P=+l[6];if(l[7]){for(u=l[7].slice(0,3);u.length<3;)u+="0";u=+u}if(l[9]){const ce=+l[10],J=+(l[11]||0);w=(ce*60+J)*6e4,l[9]==="-"&&(w=-w)}const Q=new Date(Date.UTC(a,k,I,q,$,P,u));return w&&Q.setTime(Q.getTime()-w),Q}function g(o){return o.toISOString()}return gn=new f("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:r,construct:d,instanceOf:Date,represent:g}),gn}var yn,Gn;function hr(){if(Gn)return yn;Gn=1;const f=Z();function i(A){return A==="<<"||A===null}return yn=new f("tag:yaml.org,2002:merge",{kind:"scalar",resolve:i}),yn}var bn,Wn;function gr(){if(Wn)return bn;Wn=1;const f=Z(),i=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function A(o){if(o===null)return!1;let u=0;const w=o.length,l=i;for(let a=0;a<w;a++){const k=l.indexOf(o.charAt(a));if(!(k>64)){if(k<0)return!1;u+=6}}return u%8===0}function r(o){const u=o.replace(/[\r\n=]/g,""),w=u.length,l=i;let a=0;const k=[];for(let q=0;q<w;q++)q%4===0&&q&&(k.push(a>>16&255),k.push(a>>8&255),k.push(a&255)),a=a<<6|l.indexOf(u.charAt(q));const I=w%4*6;return I===0?(k.push(a>>16&255),k.push(a>>8&255),k.push(a&255)):I===18?(k.push(a>>10&255),k.push(a>>2&255)):I===12&&k.push(a>>4&255),new Uint8Array(k)}function d(o){let u="",w=0;const l=o.length,a=i;for(let I=0;I<l;I++)I%3===0&&I&&(u+=a[w>>18&63],u+=a[w>>12&63],u+=a[w>>6&63],u+=a[w&63]),w=(w<<8)+o[I];const k=l%3;return k===0?(u+=a[w>>18&63],u+=a[w>>12&63],u+=a[w>>6&63],u+=a[w&63]):k===2?(u+=a[w>>10&63],u+=a[w>>4&63],u+=a[w<<2&63],u+=a[64]):k===1&&(u+=a[w>>2&63],u+=a[w<<4&63],u+=a[64],u+=a[64]),u}function g(o){return Object.prototype.toString.call(o)==="[object Uint8Array]"}return bn=new f("tag:yaml.org,2002:binary",{kind:"scalar",resolve:A,construct:r,predicate:g,represent:d}),bn}var xn,Qn;function yr(){if(Qn)return xn;Qn=1;const f=Z(),i=Object.prototype.hasOwnProperty,A=Object.prototype.toString;function r(g){if(g===null)return!0;const o={},u=g;for(let w=0,l=u.length;w<l;w+=1){const a=u[w];let k=!1;if(A.call(a)!=="[object Object]")return!1;let I;for(I in a)if(i.call(a,I))if(!k)k=!0;else return!1;if(!k||i.call(o,I))return!1;Object.defineProperty(o,I,{value:!0})}return!0}function d(g){return g!==null?g:[]}return xn=new f("tag:yaml.org,2002:omap",{kind:"sequence",resolve:r,construct:d}),xn}var vn,Xn;function br(){if(Xn)return vn;Xn=1;const f=Z(),i=Object.prototype.toString;function A(d){if(d===null)return!0;const g=d,o=new Array(g.length);for(let u=0,w=g.length;u<w;u+=1){const l=g[u];if(i.call(l)!=="[object Object]")return!1;const a=Object.keys(l);if(a.length!==1)return!1;o[u]=[a[0],l[a[0]]]}return!0}function r(d){if(d===null)return[];const g=d,o=new Array(g.length);for(let u=0,w=g.length;u<w;u+=1){const l=g[u],a=Object.keys(l);o[u]=[a[0],l[a[0]]]}return o}return vn=new f("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:A,construct:r}),vn}var wn,zn;function xr(){if(zn)return wn;zn=1;const f=Z(),i=Object.prototype.hasOwnProperty;function A(d){if(d===null)return!0;const g=d;for(const o in g)if(i.call(g,o)&&g[o]!==null)return!1;return!0}function r(d){return d!==null?d:{}}return wn=new f("tag:yaml.org,2002:set",{kind:"mapping",resolve:A,construct:r}),wn}var An,Zn;function Tn(){return Zn||(Zn=1,An=dr().extend({implicit:[mr(),hr()],explicit:[gr(),yr(),br(),xr()]})),An}var $n;function Pr(){if($n)return Qe;$n=1;const f=Ve(),i=Ge(),A=qr(),r=Tn(),d=Object.prototype.hasOwnProperty,g=1,o=2,u=3,w=4,l=1,a=2,k=3,I=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,q=/[\x85\u2028\u2029]/,$=/[,\[\]{}]/,P=/^(?:!|!!|![0-9A-Za-z-]+!)$/,Q=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function ce(e){return Object.prototype.toString.call(e)}function J(e){return e===10||e===13}function K(e){return e===9||e===32}function U(e){return e===9||e===32||e===10||e===13}function G(e){return e===44||e===91||e===93||e===123||e===125}function oe(e){if(e>=48&&e<=57)return e-48;const t=e|32;return t>=97&&t<=102?t-97+10:-1}function ae(e){return e===120?2:e===117?4:e===85?8:0}function de(e){return e>=48&&e<=57?e-48:-1}function me(e){switch(e){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function ge(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function ue(e,t,y){t==="__proto__"?Object.defineProperty(e,t,{configurable:!0,enumerable:!0,writable:!0,value:y}):e[t]=y}const Oe=new Array(256),X=new Array(256);for(let e=0;e<256;e++)Oe[e]=me(e)?1:0,X[e]=me(e);function H(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||r,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.maxDepth=typeof t.maxDepth=="number"?t.maxDepth:100,this.maxTotalMergeKeys=typeof t.maxTotalMergeKeys=="number"?t.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function ke(e,t){const y={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return y.snippet=A(y),new i(t,y)}function T(e,t){throw ke(e,t)}function ye(e,t){e.onWarning&&e.onWarning.call(null,ke(e,t))}function re(e,t,y){const b=e.anchorMapTransactions;if(b.length!==0){const p=b[b.length-1];d.call(p,t)||(p[t]={existed:d.call(e.anchorMap,t),value:e.anchorMap[t]})}e.anchorMap[t]=y}function qe(e){e.anchorMapTransactions.push(Object.create(null))}function pe(e){const t=e.anchorMapTransactions.pop(),y=e.anchorMapTransactions;if(y.length===0)return;const b=y[y.length-1],p=Object.keys(t);for(let n=0,s=p.length;n<s;n+=1){const c=p[n];d.call(b,c)||(b[c]=t[c])}}function Pe(e){const t=e.anchorMapTransactions.pop(),y=Object.keys(t);for(let b=y.length-1;b>=0;b-=1){const p=t[y[b]];p.existed?e.anchorMap[y[b]]=p.value:delete e.anchorMap[y[b]]}}function Ce(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,tag:e.tag,anchor:e.anchor,kind:e.kind,result:e.result}}function be(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.tag=t.tag,e.anchor=t.anchor,e.kind=t.kind,e.result=t.result}const Le={YAML:function(t,y,b){t.version!==null&&T(t,"duplication of %YAML directive"),b.length!==1&&T(t,"YAML directive accepts exactly one argument");const p=/^([0-9]+)\.([0-9]+)$/.exec(b[0]);p===null&&T(t,"ill-formed argument of the YAML directive");const n=parseInt(p[1],10),s=parseInt(p[2],10);n!==1&&T(t,"unacceptable YAML version of the document"),t.version=b[0],t.checkLineBreaks=s<2,s!==1&&s!==2&&ye(t,"unsupported YAML version of the document")},TAG:function(t,y,b){let p;b.length!==2&&T(t,"TAG directive accepts exactly two arguments");const n=b[0];p=b[1],P.test(n)||T(t,"ill-formed tag handle (first argument) of the TAG directive"),d.call(t.tagMap,n)&&T(t,'there is a previously declared suffix for "'+n+'" tag handle'),Q.test(p)||T(t,"ill-formed tag prefix (second argument) of the TAG directive");try{p=decodeURIComponent(p)}catch{T(t,"tag prefix is malformed: "+p)}t.tagMap[n]=p}};function V(e,t,y,b){if(t<y){const p=e.input.slice(t,y);if(b)for(let n=0,s=p.length;n<s;n+=1){const c=p.charCodeAt(n);c===9||c>=32&&c<=1114111||T(e,"expected valid JSON character")}else I.test(p)&&T(e,"the stream contains non-printable characters");e.result+=p}}function fe(e){e.totalMergeKeys++,e.maxTotalMergeKeys!==-1&&e.totalMergeKeys>e.maxTotalMergeKeys&&T(e,"merge keys exceeded maxTotalMergeKeys ("+e.maxTotalMergeKeys+")")}function Te(e,t,y,b){f.isObject(y)||T(e,"cannot merge mappings; the provided source object is unacceptable"),fe(e);const p=Object.keys(y);for(let n=0,s=p.length;n<s;n+=1){const c=p[n];fe(e),d.call(t,c)||(ue(t,c,y[c]),b[c]=!0)}}function le(e,t,y,b,p,n,s,c,x){if(Array.isArray(p)){p=Array.prototype.slice.call(p);for(let v=0,_=p.length;v<_;v+=1)Array.isArray(p[v])&&T(e,"nested arrays are not supported inside keys"),typeof p=="object"&&ce(p[v])==="[object Object]"&&(p[v]="[object Object]")}if(typeof p=="object"&&ce(p)==="[object Object]"&&(p="[object Object]"),p=String(p),t===null&&(t={}),b==="tag:yaml.org,2002:merge")if(Array.isArray(n)){n.length>100&&T(e,"abnormal merge sequence size");for(let v=0,_=n.length;v<_;v+=1)Te(e,t,n[v],y)}else Te(e,t,n,y);else!e.json&&!d.call(y,p)&&d.call(t,p)&&(e.line=s||e.line,e.lineStart=c||e.lineStart,e.position=x||e.position,T(e,"duplicated mapping key")),ue(t,p,n),delete y[p];return t}function Se(e){const t=e.input.charCodeAt(e.position);t===10?e.position++:t===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):T(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function Y(e,t,y){let b=0,p=e.input.charCodeAt(e.position);for(;p!==0;){for(;K(p);)p===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),p=e.input.charCodeAt(++e.position);if(t&&p===35)do p=e.input.charCodeAt(++e.position);while(p!==10&&p!==13&&p!==0);if(J(p))for(Se(e),p=e.input.charCodeAt(e.position),b++,e.lineIndent=0;p===32;)e.lineIndent++,p=e.input.charCodeAt(++e.position);else break}return y!==-1&&b!==0&&e.lineIndent<y&&ye(e,"deficient indentation"),b}function te(e){let t=e.position,y=e.input.charCodeAt(t);return!!((y===45||y===46)&&y===e.input.charCodeAt(t+1)&&y===e.input.charCodeAt(t+2)&&(t+=3,y=e.input.charCodeAt(t),y===0||U(y)))}function xe(e,t){t===1?e.result+=" ":t>1&&(e.result+=f.repeat(`
`,t-1))}function Me(e,t,y){let b,p,n,s,c,x;const v=e.kind,_=e.result;let m=e.input.charCodeAt(e.position);if(U(m)||G(m)||m===35||m===38||m===42||m===33||m===124||m===62||m===39||m===34||m===37||m===64||m===96)return!1;if(m===63||m===45){const C=e.input.charCodeAt(e.position+1);if(U(C)||y&&G(C))return!1}for(e.kind="scalar",e.result="",b=p=e.position,n=!1;m!==0;){if(m===58){const C=e.input.charCodeAt(e.position+1);if(U(C)||y&&G(C))break}else if(m===35){const C=e.input.charCodeAt(e.position-1);if(U(C))break}else{if(e.position===e.lineStart&&te(e)||y&&G(m))break;if(J(m))if(s=e.line,c=e.lineStart,x=e.lineIndent,Y(e,!1,-1),e.lineIndent>=t){n=!0,m=e.input.charCodeAt(e.position);continue}else{e.position=p,e.line=s,e.lineStart=c,e.lineIndent=x;break}}n&&(V(e,b,p,!1),xe(e,e.line-s),b=p=e.position,n=!1),K(m)||(p=e.position+1),m=e.input.charCodeAt(++e.position)}return V(e,b,p,!1),e.result?!0:(e.kind=v,e.result=_,!1)}function je(e,t){let y,b,p=e.input.charCodeAt(e.position);if(p!==39)return!1;for(e.kind="scalar",e.result="",e.position++,y=b=e.position;(p=e.input.charCodeAt(e.position))!==0;)if(p===39)if(V(e,y,e.position,!0),p=e.input.charCodeAt(++e.position),p===39)y=e.position,e.position++,b=e.position;else return!0;else J(p)?(V(e,y,b,!0),xe(e,Y(e,!1,t)),y=b=e.position):e.position===e.lineStart&&te(e)?T(e,"unexpected end of the document within a single quoted scalar"):(e.position++,K(p)||(b=e.position));T(e,"unexpected end of the stream within a single quoted scalar")}function Ee(e,t){let y,b,p,n=e.input.charCodeAt(e.position);if(n!==34)return!1;for(e.kind="scalar",e.result="",e.position++,y=b=e.position;(n=e.input.charCodeAt(e.position))!==0;){if(n===34)return V(e,y,e.position,!0),e.position++,!0;if(n===92){if(V(e,y,e.position,!0),n=e.input.charCodeAt(++e.position),J(n))Y(e,!1,t);else if(n<256&&Oe[n])e.result+=X[n],e.position++;else if((p=ae(n))>0){let s=p,c=0;for(;s>0;s--)n=e.input.charCodeAt(++e.position),(p=oe(n))>=0?c=(c<<4)+p:T(e,"expected hexadecimal character");e.result+=ge(c),e.position++}else T(e,"unknown escape sequence");y=b=e.position}else J(n)?(V(e,y,b,!0),xe(e,Y(e,!1,t)),y=b=e.position):e.position===e.lineStart&&te(e)?T(e,"unexpected end of the document within a double quoted scalar"):(e.position++,K(n)||(b=e.position))}T(e,"unexpected end of the stream within a double quoted scalar")}function S(e,t){let y=!0,b,p,n;const s=e.tag;let c;const x=e.anchor;let v,_,m,C;const j=Object.create(null);let O,L,R,N=e.input.charCodeAt(e.position);if(N===91)v=93,C=!1,c=[];else if(N===123)v=125,C=!0,c={};else return!1;for(e.anchor!==null&&re(e,e.anchor,c),N=e.input.charCodeAt(++e.position);N!==0;){if(Y(e,!0,t),N=e.input.charCodeAt(e.position),N===v)return e.position++,e.tag=s,e.anchor=x,e.kind=C?"mapping":"sequence",e.result=c,!0;if(y?N===44&&T(e,"expected the node content, but found ','"):T(e,"missed comma between flow collection entries"),L=O=R=null,_=m=!1,N===63){const Ae=e.input.charCodeAt(e.position+1);U(Ae)&&(_=m=!0,e.position++,Y(e,!0,t))}b=e.line,p=e.lineStart,n=e.position,we(e,t,g,!1,!0),L=e.tag,O=e.result,Y(e,!0,t),N=e.input.charCodeAt(e.position),(m||e.line===b)&&N===58&&(_=!0,N=e.input.charCodeAt(++e.position),Y(e,!0,t),we(e,t,g,!1,!0),R=e.result),C?le(e,c,j,L,O,R,b,p,n):_?c.push(le(e,null,j,L,O,R,b,p,n)):c.push(O),Y(e,!0,t),N=e.input.charCodeAt(e.position),N===44?(y=!0,N=e.input.charCodeAt(++e.position)):y=!1}T(e,"unexpected end of the stream within a flow collection")}function M(e,t){let y,b=l,p=!1,n=!1,s=t,c=0,x=!1,v,_=e.input.charCodeAt(e.position);if(_===124)y=!1;else if(_===62)y=!0;else return!1;for(e.kind="scalar",e.result="";_!==0;)if(_=e.input.charCodeAt(++e.position),_===43||_===45)l===b?b=_===43?k:a:T(e,"repeat of a chomping mode identifier");else if((v=de(_))>=0)v===0?T(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):n?T(e,"repeat of an indentation width identifier"):(s=t+v-1,n=!0);else break;if(K(_)){do _=e.input.charCodeAt(++e.position);while(K(_));if(_===35)do _=e.input.charCodeAt(++e.position);while(!J(_)&&_!==0)}for(;_!==0;){for(Se(e),e.lineIndent=0,_=e.input.charCodeAt(e.position);(!n||e.lineIndent<s)&&_===32;)e.lineIndent++,_=e.input.charCodeAt(++e.position);if(!n&&e.lineIndent>s&&(s=e.lineIndent),J(_)){c++;continue}if(!n&&s===0&&T(e,"missing indentation for block scalar"),e.lineIndent<s){b===k?e.result+=f.repeat(`
`,p?1+c:c):b===l&&p&&(e.result+=`
`);break}y?K(_)?(x=!0,e.result+=f.repeat(`
`,p?1+c:c)):x?(x=!1,e.result+=f.repeat(`
`,c+1)):c===0?p&&(e.result+=" "):e.result+=f.repeat(`
`,c):e.result+=f.repeat(`
`,p?1+c:c),p=!0,n=!0,c=0;const m=e.position;for(;!J(_)&&_!==0;)_=e.input.charCodeAt(++e.position);V(e,m,e.position,!1)}return!0}function ee(e,t){const y=e.tag,b=e.anchor,p=[];let n=!1;if(e.firstTabInLine!==-1)return!1;e.anchor!==null&&re(e,e.anchor,p);let s=e.input.charCodeAt(e.position);for(;s!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,T(e,"tab characters must not be used in indentation")),s===45);){const c=e.input.charCodeAt(e.position+1);if(!U(c))break;if(n=!0,e.position++,Y(e,!0,-1)&&e.lineIndent<=t){p.push(null),s=e.input.charCodeAt(e.position);continue}const x=e.line;if(we(e,t,u,!1,!0),p.push(e.result),Y(e,!0,-1),s=e.input.charCodeAt(e.position),(e.line===x||e.lineIndent>t)&&s!==0)T(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break}return n?(e.tag=y,e.anchor=b,e.kind="sequence",e.result=p,!0):!1}function se(e,t,y){let b,p,n,s;const c=e.tag,x=e.anchor,v={},_=Object.create(null);let m=null,C=null,j=null,O=!1,L=!1;if(e.firstTabInLine!==-1)return!1;e.anchor!==null&&re(e,e.anchor,v);let R=e.input.charCodeAt(e.position);for(;R!==0;){!O&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,T(e,"tab characters must not be used in indentation"));const N=e.input.charCodeAt(e.position+1),Ae=e.line;if((R===63||R===58)&&U(N))R===63?(O&&(le(e,v,_,m,C,null,p,n,s),m=C=j=null),L=!0,O=!0,b=!0):O?(O=!1,b=!0):T(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,R=N;else{if(p=e.line,n=e.lineStart,s=e.position,!we(e,y,o,!1,!0))break;if(e.line===Ae){for(R=e.input.charCodeAt(e.position);K(R);)R=e.input.charCodeAt(++e.position);if(R===58)R=e.input.charCodeAt(++e.position),U(R)||T(e,"a whitespace character is expected after the key-value separator within a block mapping"),O&&(le(e,v,_,m,C,null,p,n,s),m=C=j=null),L=!0,O=!1,b=!1,m=e.tag,C=e.result;else if(L)T(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=c,e.anchor=x,!0}else if(L)T(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=c,e.anchor=x,!0}if((e.line===Ae||e.lineIndent>t)&&(O&&(p=e.line,n=e.lineStart,s=e.position),we(e,t,w,!0,b)&&(O?C=e.result:j=e.result),O||(le(e,v,_,m,C,j,p,n,s),m=C=j=null),Y(e,!0,-1),R=e.input.charCodeAt(e.position)),(e.line===Ae||e.lineIndent>t)&&R!==0)T(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return O&&le(e,v,_,m,C,null,p,n,s),L&&(e.tag=c,e.anchor=x,e.kind="mapping",e.result=v),L}function z(e){let t=!1,y=!1,b,p,n=e.input.charCodeAt(e.position);if(n!==33)return!1;e.tag!==null&&T(e,"duplication of a tag property"),n=e.input.charCodeAt(++e.position),n===60?(t=!0,n=e.input.charCodeAt(++e.position)):n===33?(y=!0,b="!!",n=e.input.charCodeAt(++e.position)):b="!";let s=e.position;if(t){do n=e.input.charCodeAt(++e.position);while(n!==0&&n!==62);e.position<e.length?(p=e.input.slice(s,e.position),n=e.input.charCodeAt(++e.position)):T(e,"unexpected end of the stream within a verbatim tag")}else{for(;n!==0&&!U(n);)n===33&&(y?T(e,"tag suffix cannot contain exclamation marks"):(b=e.input.slice(s-1,e.position+1),P.test(b)||T(e,"named tag handle cannot contain such characters"),y=!0,s=e.position+1)),n=e.input.charCodeAt(++e.position);p=e.input.slice(s,e.position),$.test(p)&&T(e,"tag suffix cannot contain flow indicator characters")}p&&!Q.test(p)&&T(e,"tag name cannot contain such characters: "+p);try{p=decodeURIComponent(p)}catch{T(e,"tag name is malformed: "+p)}return t?e.tag=p:d.call(e.tagMap,b)?e.tag=e.tagMap[b]+p:b==="!"?e.tag="!"+p:b==="!!"?e.tag="tag:yaml.org,2002:"+p:T(e,'undeclared tag handle "'+b+'"'),!0}function Re(e){let t=e.input.charCodeAt(e.position);if(t!==38)return!1;e.anchor!==null&&T(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position);const y=e.position;for(;t!==0&&!U(t)&&!G(t);)t=e.input.charCodeAt(++e.position);return e.position===y&&T(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(y,e.position),!0}function ve(e){let t=e.input.charCodeAt(e.position);if(t!==42)return!1;t=e.input.charCodeAt(++e.position);const y=e.position;for(;t!==0&&!U(t)&&!G(t);)t=e.input.charCodeAt(++e.position);e.position===y&&T(e,"name of an alias node must contain at least one character");const b=e.input.slice(y,e.position);return d.call(e.anchorMap,b)||T(e,'unidentified alias "'+b+'"'),e.result=e.anchorMap[b],Y(e,!0,-1),!0}function We(e,t,y,b){const p=Ce(e);return qe(e),be(e,t),e.tag=null,e.anchor=null,e.kind=null,e.result=null,se(e,y,b)&&e.kind==="mapping"?(pe(e),!0):(Pe(e),be(e,p),!1)}function we(e,t,y,b,p){let n,s,c=1,x=!1,v=!1,_=null,m,C,j;e.depth>=e.maxDepth&&T(e,"nesting exceeded maxDepth ("+e.maxDepth+")"),e.depth+=1,e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null;const O=n=s=w===y||u===y;if(b&&Y(e,!0,-1)&&(x=!0,e.lineIndent>t?c=1:e.lineIndent===t?c=0:e.lineIndent<t&&(c=-1)),c===1)for(;;){const L=e.input.charCodeAt(e.position),R=Ce(e);if(x&&(L===33&&e.tag!==null||L===38&&e.anchor!==null)||!z(e)&&!Re(e))break;_===null&&(_=R),Y(e,!0,-1)?(x=!0,s=O,e.lineIndent>t?c=1:e.lineIndent===t?c=0:e.lineIndent<t&&(c=-1)):s=!1}if(s&&(s=x||p),c===1||w===y)if(g===y||o===y?C=t:C=t+1,j=e.position-e.lineStart,c===1)if(s&&(ee(e,j)||se(e,j,C))||S(e,C))v=!0;else{const L=e.input.charCodeAt(e.position);_!==null&&O&&!s&&L!==124&&L!==62&&We(e,_,_.position-_.lineStart,C)||n&&M(e,C)||je(e,C)||Ee(e,C)?v=!0:ve(e)?(v=!0,(e.tag!==null||e.anchor!==null)&&T(e,"alias node should not have any properties")):Me(e,C,g===y)&&(v=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&re(e,e.anchor,e.result)}else c===0&&(v=s&&ee(e,j));if(e.tag===null)e.anchor!==null&&re(e,e.anchor,e.result);else if(e.tag==="?"){e.result!==null&&e.kind!=="scalar"&&T(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"');for(let L=0,R=e.implicitTypes.length;L<R;L+=1)if(m=e.implicitTypes[L],m.resolve(e.result)){e.result=m.construct(e.result),e.tag=m.tag,e.anchor!==null&&re(e,e.anchor,e.result);break}}else if(e.tag!=="!"){if(d.call(e.typeMap[e.kind||"fallback"],e.tag))m=e.typeMap[e.kind||"fallback"][e.tag];else{m=null;const L=e.typeMap.multi[e.kind||"fallback"];for(let R=0,N=L.length;R<N;R+=1)if(e.tag.slice(0,L[R].tag.length)===L[R].tag){m=L[R];break}}m||T(e,"unknown tag !<"+e.tag+">"),e.result!==null&&m.kind!==e.kind&&T(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+m.kind+'", not "'+e.kind+'"'),m.resolve(e.result,e.tag)?(e.result=m.construct(e.result,e.tag),e.anchor!==null&&re(e,e.anchor,e.result)):T(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.depth-=1,e.tag!==null||e.anchor!==null||v}function ze(e){const t=e.position;let y=!1,b;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(b=e.input.charCodeAt(e.position))!==0&&(Y(e,!0,-1),b=e.input.charCodeAt(e.position),!(e.lineIndent>0||b!==37));){y=!0,b=e.input.charCodeAt(++e.position);let p=e.position;for(;b!==0&&!U(b);)b=e.input.charCodeAt(++e.position);const n=e.input.slice(p,e.position),s=[];for(n.length<1&&T(e,"directive name must not be less than one character in length");b!==0;){for(;K(b);)b=e.input.charCodeAt(++e.position);if(b===35){do b=e.input.charCodeAt(++e.position);while(b!==0&&!J(b));break}if(J(b))break;for(p=e.position;b!==0&&!U(b);)b=e.input.charCodeAt(++e.position);s.push(e.input.slice(p,e.position))}b!==0&&Se(e),d.call(Le,n)?Le[n](e,n,s):ye(e,'unknown document directive "'+n+'"')}if(Y(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,Y(e,!0,-1)):y&&T(e,"directives end mark is expected"),we(e,e.lineIndent-1,w,!1,!0),Y(e,!0,-1),e.checkLineBreaks&&q.test(e.input.slice(t,e.position))&&ye(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&te(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,Y(e,!0,-1));return}e.position<e.length-1&&T(e,"end of the stream or a document separator is expected")}function Fe(e,t){e=String(e),t=t||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));const y=new H(e,t),b=e.indexOf("\0");for(b!==-1&&(y.position=b,T(y,"null byte is not allowed in input")),y.input+="\0";y.input.charCodeAt(y.position)===32;)y.lineIndent+=1,y.position+=1;for(;y.position<y.length-1;)ze(y);return y.documents}function Ze(e,t,y){t!==null&&typeof t=="object"&&typeof y>"u"&&(y=t,t=null);const b=Fe(e,y);if(typeof t!="function")return b;for(let p=0,n=b.length;p<n;p+=1)t(b[p])}function $e(e,t){const y=Fe(e,t);if(y.length!==0){if(y.length===1)return y[0];throw new i("expected a single document in the stream, but found more")}}return Qe.loadAll=Ze,Qe.load=$e,Qe}var _n={},er;function Fr(){if(er)return _n;er=1;const f=Ve(),i=Ge(),A=Tn(),r=Object.prototype.toString,d=Object.prototype.hasOwnProperty,g=65279,o=9,u=10,w=13,l=32,a=33,k=34,I=35,q=37,$=38,P=39,Q=42,ce=44,J=45,K=58,U=61,G=62,oe=63,ae=64,de=91,me=93,ge=96,ue=123,Oe=124,X=125,H={};H[0]="\\0",H[7]="\\a",H[8]="\\b",H[9]="\\t",H[10]="\\n",H[11]="\\v",H[12]="\\f",H[13]="\\r",H[27]="\\e",H[34]='\\"',H[92]="\\\\",H[133]="\\N",H[160]="\\_",H[8232]="\\L",H[8233]="\\P";const ke=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],T=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function ye(n,s){if(s===null)return{};const c={},x=Object.keys(s);for(let v=0,_=x.length;v<_;v+=1){let m=x[v],C=String(s[m]);m.slice(0,2)==="!!"&&(m="tag:yaml.org,2002:"+m.slice(2));const j=n.compiledTypeMap.fallback[m];j&&d.call(j.styleAliases,C)&&(C=j.styleAliases[C]),c[m]=C}return c}function re(n){let s,c;const x=n.toString(16).toUpperCase();if(n<=255)s="x",c=2;else if(n<=65535)s="u",c=4;else if(n<=4294967295)s="U",c=8;else throw new i("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+s+f.repeat("0",c-x.length)+x}const qe=1,pe=2;function Pe(n){this.schema=n.schema||A,this.indent=Math.max(1,n.indent||2),this.noArrayIndent=n.noArrayIndent||!1,this.skipInvalid=n.skipInvalid||!1,this.flowLevel=f.isNothing(n.flowLevel)?-1:n.flowLevel,this.styleMap=ye(this.schema,n.styles||null),this.sortKeys=n.sortKeys||!1,this.lineWidth=n.lineWidth||80,this.noRefs=n.noRefs||!1,this.noCompatMode=n.noCompatMode||!1,this.condenseFlow=n.condenseFlow||!1,this.quotingType=n.quotingType==='"'?pe:qe,this.forceQuotes=n.forceQuotes||!1,this.replacer=typeof n.replacer=="function"?n.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Ce(n,s){const c=f.repeat(" ",s);let x=0,v="";const _=n.length;for(;x<_;){let m;const C=n.indexOf(`
`,x);C===-1?(m=n.slice(x),x=_):(m=n.slice(x,C+1),x=C+1),m.length&&m!==`
`&&(v+=c),v+=m}return v}function be(n,s){return`
`+f.repeat(" ",n.indent*s)}function Le(n,s){for(let c=0,x=n.implicitTypes.length;c<x;c+=1)if(n.implicitTypes[c].resolve(s))return!0;return!1}function V(n){return n===l||n===o}function fe(n){return n>=32&&n<=126||n>=161&&n<=55295&&n!==8232&&n!==8233||n>=57344&&n<=65533&&n!==g||n>=65536&&n<=1114111}function Te(n){return fe(n)&&n!==g&&n!==w&&n!==u}function le(n,s,c){const x=Te(n),v=x&&!V(n);return(c?x:x&&n!==ce&&n!==de&&n!==me&&n!==ue&&n!==X)&&n!==I&&!(s===K&&!v)||Te(s)&&!V(s)&&n===I||s===K&&v}function Se(n){return fe(n)&&n!==g&&!V(n)&&n!==J&&n!==oe&&n!==K&&n!==ce&&n!==de&&n!==me&&n!==ue&&n!==X&&n!==I&&n!==$&&n!==Q&&n!==a&&n!==Oe&&n!==U&&n!==G&&n!==P&&n!==k&&n!==q&&n!==ae&&n!==ge}function Y(n){return!V(n)&&n!==K}function te(n,s){const c=n.charCodeAt(s);let x;return c>=55296&&c<=56319&&s+1<n.length&&(x=n.charCodeAt(s+1),x>=56320&&x<=57343)?(c-55296)*1024+x-56320+65536:c}function xe(n){return/^\n* /.test(n)}const Me=1,je=2,Ee=3,S=4,M=5;function ee(n,s,c,x,v,_,m,C){let j,O=0,L=null,R=!1,N=!1;const Ae=x!==-1;let De=-1,Ye=Se(te(n,0))&&Y(te(n,n.length-1));if(s||m)for(j=0;j<n.length;O>=65536?j+=2:j++){if(O=te(n,j),!fe(O))return M;Ye=Ye&&le(O,L,C),L=O}else{for(j=0;j<n.length;O>=65536?j+=2:j++){if(O=te(n,j),O===u)R=!0,Ae&&(N=N||j-De-1>x&&n[De+1]!==" ",De=j);else if(!fe(O))return M;Ye=Ye&&le(O,L,C),L=O}N=N||Ae&&j-De-1>x&&n[De+1]!==" "}return!R&&!N?Ye&&!m&&!v(n)?Me:_===pe?M:je:c>9&&xe(n)?M:m?_===pe?M:je:N?S:Ee}function se(n,s,c,x,v){n.dump=(function(){if(s.length===0)return n.quotingType===pe?'""':"''";if(!n.noCompatMode&&(ke.indexOf(s)!==-1||T.test(s)))return n.quotingType===pe?'"'+s+'"':"'"+s+"'";const _=n.indent*Math.max(1,c),m=n.lineWidth===-1?-1:Math.max(Math.min(n.lineWidth,40),n.lineWidth-_),C=x||n.flowLevel>-1&&c>=n.flowLevel;function j(O){return Le(n,O)}switch(ee(s,C,n.indent,m,j,n.quotingType,n.forceQuotes&&!x,v)){case Me:return s;case je:return"'"+s.replace(/'/g,"''")+"'";case Ee:return"|"+z(s,n.indent)+Re(Ce(s,_));case S:return">"+z(s,n.indent)+Re(Ce(ve(s,m),_));case M:return'"'+we(s)+'"';default:throw new i("impossible error: invalid scalar style")}})()}function z(n,s){const c=xe(n)?String(s):"",x=n[n.length-1]===`
`,_=x&&(n[n.length-2]===`
`||n===`
`)?"+":x?"":"-";return c+_+`
`}function Re(n){return n[n.length-1]===`
`?n.slice(0,-1):n}function ve(n,s){const c=/(\n+)([^\n]*)/g;let x=(function(){let C=n.indexOf(`
`);return C=C!==-1?C:n.length,c.lastIndex=C,We(n.slice(0,C),s)})(),v=n[0]===`
`||n[0]===" ",_,m;for(;m=c.exec(n);){const C=m[1],j=m[2];_=j[0]===" ",x+=C+(!v&&!_&&j!==""?`
`:"")+We(j,s),v=_}return x}function We(n,s){if(n===""||n[0]===" ")return n;const c=/ [^ ]/g;let x,v=0,_,m=0,C=0,j="";for(;x=c.exec(n);)C=x.index,C-v>s&&(_=m>v?m:C,j+=`
`+n.slice(v,_),v=_+1),m=C;return j+=`
`,n.length-v>s&&m>v?j+=n.slice(v,m)+`
`+n.slice(m+1):j+=n.slice(v),j.slice(1)}function we(n){let s="",c=0;for(let x=0;x<n.length;c>=65536?x+=2:x++){c=te(n,x);const v=H[c];!v&&fe(c)?(s+=n[x],c>=65536&&(s+=n[x+1])):s+=v||re(c)}return s}function ze(n,s,c){let x="";const v=n.tag;for(let _=0,m=c.length;_<m;_+=1){let C=c[_];n.replacer&&(C=n.replacer.call(c,String(_),C)),(t(n,s,C,!1,!1)||typeof C>"u"&&t(n,s,null,!1,!1))&&(x!==""&&(x+=","+(n.condenseFlow?"":" ")),x+=n.dump)}n.tag=v,n.dump="["+x+"]"}function Fe(n,s,c,x){let v="";const _=n.tag;for(let m=0,C=c.length;m<C;m+=1){let j=c[m];n.replacer&&(j=n.replacer.call(c,String(m),j)),(t(n,s+1,j,!0,!0,!1,!0)||typeof j>"u"&&t(n,s+1,null,!0,!0,!1,!0))&&((!x||v!=="")&&(v+=be(n,s)),n.dump&&u===n.dump.charCodeAt(0)?v+="-":v+="- ",v+=n.dump)}n.tag=_,n.dump=v||"[]"}function Ze(n,s,c){let x="";const v=n.tag,_=Object.keys(c);for(let m=0,C=_.length;m<C;m+=1){let j="";x!==""&&(j+=", "),n.condenseFlow&&(j+='"');const O=_[m];let L=c[O];n.replacer&&(L=n.replacer.call(c,O,L)),t(n,s,O,!1,!1)&&(n.dump.length>1024&&(j+="? "),j+=n.dump+(n.condenseFlow?'"':"")+":"+(n.condenseFlow?"":" "),t(n,s,L,!1,!1)&&(j+=n.dump,x+=j))}n.tag=v,n.dump="{"+x+"}"}function $e(n,s,c,x){let v="";const _=n.tag,m=Object.keys(c);if(n.sortKeys===!0)m.sort();else if(typeof n.sortKeys=="function")m.sort(n.sortKeys);else if(n.sortKeys)throw new i("sortKeys must be a boolean or a function");for(let C=0,j=m.length;C<j;C+=1){let O="";(!x||v!=="")&&(O+=be(n,s));const L=m[C];let R=c[L];if(n.replacer&&(R=n.replacer.call(c,L,R)),!t(n,s+1,L,!0,!0,!0))continue;const N=n.tag!==null&&n.tag!=="?"||n.dump&&n.dump.length>1024;N&&(n.dump&&u===n.dump.charCodeAt(0)?O+="?":O+="? "),O+=n.dump,N&&(O+=be(n,s)),t(n,s+1,R,!0,N)&&(n.dump&&u===n.dump.charCodeAt(0)?O+=":":O+=": ",O+=n.dump,v+=O)}n.tag=_,n.dump=v||"{}"}function e(n,s,c){const x=c?n.explicitTypes:n.implicitTypes;for(let v=0,_=x.length;v<_;v+=1){const m=x[v];if((m.instanceOf||m.predicate)&&(!m.instanceOf||typeof s=="object"&&s instanceof m.instanceOf)&&(!m.predicate||m.predicate(s))){if(c?m.multi&&m.representName?n.tag=m.representName(s):n.tag=m.tag:n.tag="?",m.represent){const C=n.styleMap[m.tag]||m.defaultStyle;let j;if(r.call(m.represent)==="[object Function]")j=m.represent(s,C);else if(d.call(m.represent,C))j=m.represent[C](s,C);else throw new i("!<"+m.tag+'> tag resolver accepts not "'+C+'" style');n.dump=j}return!0}}return!1}function t(n,s,c,x,v,_,m){n.tag=null,n.dump=c,e(n,c,!1)||e(n,c,!0);const C=r.call(n.dump),j=x;x&&(x=n.flowLevel<0||n.flowLevel>s);const O=C==="[object Object]"||C==="[object Array]";let L,R;if(O&&(L=n.duplicates.indexOf(c),R=L!==-1),(n.tag!==null&&n.tag!=="?"||R||n.indent!==2&&s>0)&&(v=!1),R&&n.usedDuplicates[L])n.dump="*ref_"+L;else{if(O&&R&&!n.usedDuplicates[L]&&(n.usedDuplicates[L]=!0),C==="[object Object]")x&&Object.keys(n.dump).length!==0?($e(n,s,n.dump,v),R&&(n.dump="&ref_"+L+n.dump)):(Ze(n,s,n.dump),R&&(n.dump="&ref_"+L+" "+n.dump));else if(C==="[object Array]")x&&n.dump.length!==0?(n.noArrayIndent&&!m&&s>0?Fe(n,s-1,n.dump,v):Fe(n,s,n.dump,v),R&&(n.dump="&ref_"+L+n.dump)):(ze(n,s,n.dump),R&&(n.dump="&ref_"+L+" "+n.dump));else if(C==="[object String]")n.tag!=="?"&&se(n,n.dump,s,_,j);else{if(C==="[object Undefined]")return!1;if(n.skipInvalid)return!1;throw new i("unacceptable kind of an object to dump "+C)}if(n.tag!==null&&n.tag!=="?"){let N=encodeURI(n.tag[0]==="!"?n.tag.slice(1):n.tag).replace(/!/g,"%21");n.tag[0]==="!"?N="!"+N:N.slice(0,18)==="tag:yaml.org,2002:"?N="!!"+N.slice(18):N="!<"+N+">",n.dump=N+" "+n.dump}}return!0}function y(n,s){const c=[],x=[];b(n,c,x);const v=x.length;for(let _=0;_<v;_+=1)s.duplicates.push(c[x[_]]);s.usedDuplicates=new Array(v)}function b(n,s,c){if(n!==null&&typeof n=="object"){const x=s.indexOf(n);if(x!==-1)c.indexOf(x)===-1&&c.push(x);else if(s.push(n),Array.isArray(n))for(let v=0,_=n.length;v<_;v+=1)b(n[v],s,c);else{const v=Object.keys(n);for(let _=0,m=v.length;_<m;_+=1)b(n[v[_]],s,c)}}}function p(n,s){s=s||{};const c=new Pe(s);c.noRefs||y(n,c);let x=n;return c.replacer&&(x=c.replacer.call({"":x},"",x)),t(c,0,x,!0,!0)?c.dump+`
`:""}return _n.dump=p,_n}var nr;function Dr(){if(nr)return W;nr=1;const f=Pr(),i=Fr();function A(r,d){return function(){throw new Error("Function yaml."+r+" is removed in js-yaml 4. Use yaml."+d+" instead, which is now safe by default.")}}return W.Type=Z(),W.Schema=tr(),W.FAILSAFE_SCHEMA=sr(),W.JSON_SCHEMA=fr(),W.CORE_SCHEMA=dr(),W.DEFAULT_SCHEMA=Tn(),W.load=f.load,W.loadAll=f.loadAll,W.dump=i.dump,W.YAMLException=Ge(),W.types={binary:gr(),float:pr(),map:lr(),null:cr(),pairs:br(),set:xr(),timestamp:mr(),bool:ar(),int:ur(),merge:hr(),omap:yr(),seq:or(),str:ir()},W.safeLoad=A("safeLoad","load"),W.safeLoadAll=A("safeLoadAll","loadAll"),W.safeDump=A("safeDump","dump"),W}var Yr=Dr();const Je=Nr(Yr),{Type:Ii,Schema:Oi,FAILSAFE_SCHEMA:Li,JSON_SCHEMA:Mi,CORE_SCHEMA:Ri,DEFAULT_SCHEMA:Ni,load:qi,loadAll:Pi,dump:Fi,YAMLException:Di,types:Yi,safeLoad:Hi,safeLoadAll:Ui,safeDump:Bi}=Je;function vr(f){const i=f.trim();if(!i)return{ok:!1,value:void 0};try{if(/^---(?:\s|$)/m.test(i)){const r=[];if(Je.loadAll(i,d=>{d!=null&&r.push(d)}),r.length>1)return{ok:!0,value:r,isMultiDoc:!0};if(r.length===1)return{ok:!0,value:r[0],isMultiDoc:!1}}return{ok:!0,value:Je.load(i),isMultiDoc:!1}}catch(A){return{ok:!1,value:void 0,error:wr(A)}}}function wr(f){if(typeof f=="object"&&f!==null&&"mark"in f){const A=f,r=A.mark,d=r?r.line+1:1,g=r?r.column+1:1,o=r?.snippet??"",u=A.reason??"YAML Syntax Error";return{message:`${u} (Line ${d}, Column ${g})`,line:d,column:g,snippet:o,reason:u}}const i=f instanceof Error?f.message:String(f);return{message:i,line:1,column:1,snippet:"",reason:i}}function Ar(f,i={}){if(f===void 0)return"";const A={...Be,...i},r={indent:A.indent,sortKeys:A.sortKeys,noArrayIndent:A.noArrayIndent,lineWidth:A.lineWidth,forceQuotes:A.forceQuotes,skipInvalid:!0};return A.quotingType==="single"?r.quotingType="'":A.quotingType==="double"&&(r.quotingType='"'),Array.isArray(f)&&f.__isMultiDoc?f.map(d=>Je.dump(d,r).trim()).join(`
---
`)+`
`:Je.dump(f,r)}function Hr(f,i={}){const A=vr(f);if(!A.ok)return{ok:!1,code:f,error:A.error};try{return{ok:!0,code:Ar(A.value,i)}}catch(r){return{ok:!1,code:f,error:wr(r)}}}function Ur(f,i={}){const A={...Ke,...i},r={indent:A.indent,quote:A.quote,unquoteKeys:A.unquoteKeys,trailingComma:A.trailingComma,declaration:A.declaration};return Sr(f,r)}function Br(f,i=2,A=!1){if(f===void 0)return"";const r=A?Cn(f):f;return JSON.stringify(r,null,i===0?void 0:i)}function Cn(f){if(Array.isArray(f))return f.map(Cn);if(typeof f=="object"&&f!==null){const i={},A=Object.keys(f).sort();for(const r of A)i[r]=Cn(f[r]);return i}return f}const Kr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function Jr(f){return f.replace(/[&<>"']/g,i=>Kr[i]??i)}function Vr(f){return f?Jr(f).split(`
`).map(d=>{if(!d.trim())return d;const g=d.indexOf("#");let o=d,u="";if(g!==-1&&(o=d.slice(0,g),u=`<span class="bu-yaml-comment">${d.slice(g)}</span>`),/^\s*(?:---|(?:\.\.\.))\s*$/.test(o))return`<span class="bu-yaml-tag font-bold">${o}</span>${u}`;const w=o.match(/^(\s*(?:-\s+)?)([\w\-./@]+|&quot;[^&]*&quot;|&#39;[^&]*&#39;)(\s*:)(.*)$/);if(w){const[,a,k,I,q]=w,$=kn(q);return`${a}<span class="bu-yaml-key font-medium">${k}</span><span class="text-faint">${I}</span>${$}${u}`}const l=o.match(/^(\s*-\s+)(.*)$/);if(l){const[,a,k]=l;return`${a}${kn(k)}${u}`}return`${kn(o)}${u}`}).join(`
`):""}function kn(f){return f.trim()?f.replace(/(&quot;.*?&quot;|&#39;.*?&#39;|\b(?:true|false|yes|no|on|off)\b|\b(?:null|~)\b|-?\b\d+(?:\.\d+)?\b)/gi,i=>i.startsWith("&quot;")||i.startsWith("&#39;")?`<span class="bu-yaml-string">${i}</span>`:/^(?:true|false|yes|no|on|off)$/i.test(i)?`<span class="bu-yaml-bool font-medium">${i}</span>`:/^(?:null|~)$/i.test(i)?`<span class="bu-yaml-bool italic text-faint">${i}</span>`:/^-?\d+(?:\.\d+)?$/.test(i)?`<span class="bu-yaml-number">${i}</span>`:i):f}function Gr(f,i){const A=new TextEncoder,r=A.encode(f).length,d=A.encode(i).length,g=f.length,o=i.length,u=f?f.split(/\r\n|\r|\n/).length:0,w=i?i.split(/\r\n|\r|\n/).length:0;let l="0%";if(r>0&&d>0){const a=(d-r)/r*100;l=`${a>=0?"+":""}${a.toFixed(1)}%`}return{inChars:g,inLines:u,inBytes:r,outChars:o,outLines:w,outBytes:d,ratio:l}}function Ne(){try{if(typeof localStorage>"u")return[];const f=localStorage.getItem(Xe);if(!f)return[];const i=JSON.parse(f);return Array.isArray(i)?i:[]}catch{return[]}}function Wr(f,i,A){const r=f.trim();if(!r||r.length>Rr)return Ne();try{const g=Ne().filter(w=>w.content.trim()!==r),u=[{id:`${Date.now()}_${Math.random().toString(36).slice(2,7)}`,content:r,direction:i,supportJs:A,createdAt:Date.now()},...g].slice(0,rr);return typeof localStorage<"u"&&localStorage.setItem(Xe,JSON.stringify(u)),u}catch{return Ne()}}function Qr(f){try{const A=Ne().filter(r=>r.id!==f);return typeof localStorage<"u"&&localStorage.setItem(Xe,JSON.stringify(A)),A}catch{return Ne()}}function Xr(){try{typeof localStorage<"u"&&localStorage.removeItem(Xe)}catch{}}const zr=Or({__name:"JsonToYaml",props:{locale:{}},setup(f,{expose:i}){i();const A=f,r=(S,M)=>Cr(A.locale,S,M),d=he(()=>Tr[A.locale]),g=B("yaml-to-json"),o=B(!1),u=B("js"),w=B(""),l=B("");let a;const k=B(Be.indent),I=B(Be.sortKeys),q=B(Be.noArrayIndent),$=B(Be.quotingType),P=B(Ke.quote),Q=B(Ke.unquoteKeys),ce=B(Ke.trailingComma),J=B(Ke.declaration),K=B(!1),U=B(!1);let G,oe;const ae=B([]),de=B(null),me=B(null),ge=B(null);En(w,S=>{a&&clearTimeout(a),a=setTimeout(()=>{l.value=S},120)});const ue=he(()=>l.value.trim()===""),Oe=he(()=>{const M=(w.value||"").split(`
`).length;return Array.from({length:Math.max(1,M)},(ee,se)=>se+1)}),X=he(()=>{if(ue.value)return{ok:!1,value:void 0};const S=l.value;if(g.value==="json-to-yaml"){if(o.value){const M=Sn(S);return{ok:M.ok,value:M.value,error:M.error}}try{return{ok:!0,value:JSON.parse(S)}}catch{const M=Sn(S);return!M.ok&&M.error?{ok:!1,value:void 0,error:M.error}:{ok:!1,value:void 0,error:{message:"Invalid JSON syntax",line:1,column:1,snippet:"",reason:"JSON Parse Error"}}}}else{const M=vr(S);return{ok:M.ok,value:M.value,error:M.error}}}),H=he(()=>X.value.ok),ke=he(()=>X.value.error),T=he(()=>{if(!X.value.ok||X.value.value===void 0)return"";const S=X.value.value;if(g.value==="json-to-yaml"){const M={indent:k.value,sortKeys:I.value,noArrayIndent:q.value,quotingType:$.value};return Ar(S,M)}else{if(o.value&&u.value==="js"){const M={indent:k.value,quote:P.value,unquoteKeys:Q.value,trailingComma:ce.value,declaration:J.value};return Ur(S,M)}return Br(S,k.value,I.value)}}),ye=he(()=>T.value?g.value==="json-to-yaml"?Vr(T.value):re(T.value):"");function re(S){const M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return S.replace(/[&<>"']/g,ee=>M[ee]??ee)}const qe=he(()=>Gr(l.value,T.value));function pe(){!H.value||ue.value||(ae.value=Wr(l.value,g.value,o.value),U.value=!0,oe&&clearTimeout(oe),oe=setTimeout(()=>{U.value=!1},1800))}En(T,S=>{S&&H.value&&pe()});function Pe(){de.value&&me.value&&(me.value.scrollTop=de.value.scrollTop)}function Ce(){const S=ke.value,M=de.value;if(!S||!M)return;const ee=w.value.split(`
`),se=Math.max(0,S.line-1);let z=0;for(let ve=0;ve<se&&ve<ee.length;ve+=1)z+=ee[ve].length+1;z+=Math.max(0,S.column-1),M.focus(),M.setSelectionRange(z,z);const Re=24;M.scrollTop=Math.max(0,(S.line-3)*Re)}function be(){T.value&&H.value&&(w.value=T.value,l.value=T.value),g.value=g.value==="json-to-yaml"?"yaml-to-json":"json-to-yaml"}function Le(){if(!ue.value)if(g.value==="yaml-to-json"){const S=Hr(w.value,{indent:k.value,sortKeys:I.value,noArrayIndent:q.value,quotingType:$.value});S.ok&&(w.value=S.code,l.value=S.code,V())}else try{if(X.value.ok&&X.value.value!==void 0){const S=JSON.stringify(X.value.value,null,k.value);w.value=S,l.value=S,V()}}catch{}}function V(){K.value=!0,G&&clearTimeout(G),G=setTimeout(()=>{K.value=!1},1600)}function fe(){const S=In[A.locale]??In.en;if(g.value==="json-to-yaml"){const M=o.value?S.js:S.json;w.value=M,l.value=M}else w.value=S.yaml,l.value=S.yaml}function Te(){w.value="",l.value=""}function le(){if(!T.value)return;let S="converted.yaml",M="text/yaml";g.value==="json-to-yaml"?(S="converted.yaml",M="text/yaml"):o.value&&u.value==="js"?(S="converted.js",M="text/javascript"):(S="converted.json",M="application/json");const ee=new Blob([T.value],{type:`${M};charset=utf-8`}),se=URL.createObjectURL(ee),z=document.createElement("a");z.href=se,z.download=S,document.body.appendChild(z),z.click(),document.body.removeChild(z),URL.revokeObjectURL(se)}function Se(){ge.value={title:r("jty.clearTitle"),message:r("jty.clearConfirm",{n:ae.value.length}),action:()=>{Xr(),ae.value=[]}}}function Y(){const S=ge.value?.action;ge.value=null,S&&S()}function te(S){g.value=S.direction,o.value=S.supportJs,w.value=S.content,l.value=S.content}function xe(S){ae.value=Qr(S)}function Me(S){return S<1024?`${S} B`:`${(S/1024).toFixed(1)} KB`}function je(S){return new Date(S).toLocaleString(d.value)}Lr(()=>{ae.value=Ne()}),Mr(()=>{a&&clearTimeout(a),G&&clearTimeout(G),oe&&clearTimeout(oe)});const Ee={props:A,tr:r,tag:d,direction:g,supportJs:o,jsOutputTarget:u,input:w,debounced:l,get debounceTimer(){return a},set debounceTimer(S){a=S},indent:k,sortKeys:I,noArrayIndent:q,quotingType:$,jsQuote:P,jsUnquoteKeys:Q,jsTrailingComma:ce,jsDeclaration:J,formatHint:K,savedHint:U,get formatTimer(){return G},set formatTimer(S){G=S},get savedTimer(){return oe},set savedTimer(S){oe=S},history:ae,textareaRef:de,gutterRef:me,pending:ge,isEmpty:ue,inputLines:Oe,parsed:X,valid:H,error:ke,output:T,highlightedOutput:ye,escapeHtml:re,stats:qe,triggerSaveHistory:pe,onTextareaScroll:Pe,jumpToErrorLine:Ce,swapDirection:be,formatInPlace:Le,triggerFormatSuccess:V,loadSample:fe,clearInput:Te,downloadOutput:le,askClearHistory:Se,runPending:Y,loadHistoryItem:te,deleteHistoryItem:xe,sizeLabel:Me,formatTime:je,get MAX_HISTORY_LIMIT(){return rr},CopyButton:jr};return Object.defineProperty(Ee,"__isScriptSetup",{enumerable:!1,value:!0}),Ee}}),Zr={class:"space-y-4"},$r={class:"bu-card p-3 sm:p-4"},et={class:"flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"},nt={class:"flex flex-wrap items-center gap-2"},rt={class:"inline-flex rounded-xl bg-canvas p-1 border border-line"},tt=["title"],it=["title"],ot={class:"flex flex-wrap items-center gap-2 text-xs"},lt=["disabled"],st={key:1,class:"text-xs font-medium text-ok animate-fade-in"},ct=["disabled"],at={key:2,class:"text-xs text-ok"},ut={class:"mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-3 text-xs text-muted"},pt={class:"flex items-center gap-1.5"},ft={class:"font-medium text-ink"},dt={class:"inline-flex cursor-pointer items-center gap-1.5 hover:text-ink"},mt={class:"inline-flex cursor-pointer items-center gap-1.5 hover:text-ink"},ht={class:"flex items-center gap-1.5"},gt={class:"font-medium text-ink"},yt={class:"flex items-center gap-1.5"},bt={class:"inline-flex cursor-pointer items-center gap-1.5 hover:text-ink"},xt={class:"inline-flex cursor-pointer items-center gap-1.5 hover:text-ink"},vt={class:"flex items-center gap-1.5"},wt={class:"font-medium text-ink"},At={value:"none"},_t={value:"const"},kt={value:"export"},Ct={class:"grid grid-cols-1 gap-4 lg:grid-cols-2"},Tt={class:"bu-card flex flex-col overflow-hidden"},St={class:"flex items-center justify-between border-b border-line px-3 py-2 bg-canvas/60"},jt={class:"flex items-center gap-2"},Et={class:"text-sm font-semibold text-ink"},It={key:0,class:"rounded-full bg-canvas px-2 py-0.5 text-[11px] text-faint border border-line"},Ot={key:1,class:"inline-flex items-center gap-1 rounded-full bg-ok-soft px-2 py-0.5 text-[11px] font-medium text-ok"},Lt={key:2,class:"inline-flex items-center gap-1 rounded-full bg-danger-soft px-2 py-0.5 text-[11px] font-medium text-danger"},Mt={class:"relative flex flex-1 h-[28rem] sm:h-[32rem] lg:h-[36rem] bg-white overflow-hidden"},Rt={ref:"gutterRef",class:"w-11 shrink-0 select-none overflow-hidden border-r border-line bg-canvas/40 py-3 text-right font-mono text-xs text-faint"},Nt={key:0,class:"absolute left-1 text-danger"},qt=["placeholder"],Pt={class:"flex items-center justify-between border-t border-line bg-canvas px-3 py-2 text-xs text-muted"},Ft={key:0,class:"font-mono text-danger font-medium"},Dt={class:"bu-card flex flex-col overflow-hidden"},Yt={class:"flex items-center justify-between border-b border-line px-3 py-2 bg-canvas/60"},Ht={class:"flex items-center gap-2"},Ut={class:"text-sm font-semibold text-ink"},Bt={class:"flex items-center gap-2"},Kt=["disabled"],Jt={class:"relative flex-1 h-[28rem] sm:h-[32rem] lg:h-[36rem] overflow-auto bg-white"},Vt={key:0,class:"flex h-full min-h-[20rem] items-center justify-center p-6 text-center text-sm text-faint"},Gt={key:1,class:"p-4 sm:p-5"},Wt={class:"rounded-xl border border-danger/40 bg-danger-soft p-4 sm:p-5"},Qt={class:"flex items-center justify-between"},Xt={class:"flex items-center gap-2 text-sm font-semibold text-danger"},zt={class:"mt-2 font-mono text-xs sm:text-sm text-danger font-medium"},Zt={class:"mt-1 text-xs text-muted"},$t={key:0,class:"mt-3 overflow-x-auto rounded-lg border border-danger/30 bg-white p-3 font-mono text-xs text-ink leading-relaxed whitespace-pre"},ei={key:2,class:"p-4"},ni=["innerHTML"],ri={class:"flex items-center justify-between border-t border-line bg-canvas px-3 py-2 text-xs text-muted"},ti={key:0,class:"font-mono text-brand font-medium"},ii={key:0,class:"bu-card p-4 sm:p-5"},oi={class:"flex items-center justify-between border-b border-line pb-3"},li={class:"text-sm font-semibold text-ink"},si={class:"text-xs text-faint"},ci={class:"mt-3 divide-y divide-line"},ai={class:"flex items-center gap-2 overflow-hidden pr-3"},ui={key:0,class:"shrink-0 rounded bg-accent/10 text-accent px-1 py-0.5 text-[10px] font-medium"},pi={class:"truncate font-mono text-[11px] text-ink"},fi={class:"flex shrink-0 items-center gap-3"},di={class:"text-faint text-[11px] hidden sm:inline"},mi=["onClick"],hi=["onClick"],gi={class:"text-center text-xs text-faint pt-1"},yi={href:"https://github.com/nodeca/js-yaml",target:"_blank",rel:"noopener noreferrer",class:"hover:text-brand hover:underline"},bi={key:1,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs"},xi={class:"bu-card w-full max-w-sm p-5 shadow-lift animate-fade-in"},vi={class:"text-sm font-semibold text-ink"},wi={class:"mt-2 text-xs text-muted leading-relaxed"},Ai={class:"mt-4 flex justify-end gap-2 text-xs"};function _i(f,i,A,r,d,g){return D(),F("section",Zr,[h("div",$r,[h("div",et,[h("div",nt,[h("div",rt,[h("button",{type:"button",class:ie(["rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition",r.direction==="yaml-to-json"?"bg-brand text-white shadow-xs":"text-muted hover:text-ink"]),onClick:i[0]||(i[0]=o=>r.direction="yaml-to-json")},E(r.supportJs?r.tr("jty.modeYamlToJs"):r.tr("jty.modeYamlToJson")),3),h("button",{type:"button",class:ie(["rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition",r.direction==="json-to-yaml"?"bg-brand text-white shadow-xs":"text-muted hover:text-ink"]),onClick:i[1]||(i[1]=o=>r.direction="json-to-yaml")},E(r.supportJs?r.tr("jty.modeJsToYaml"):r.tr("jty.modeJsonToYaml")),3)]),h("button",{type:"button",class:"inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-white text-muted hover:border-brand hover:text-brand-dark transition active:scale-95",title:r.tr("jty.swap"),onClick:r.swapDirection},[...i[17]||(i[17]=[h("svg",{class:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],8,tt),h("label",{class:ie(["inline-flex cursor-pointer items-center gap-2 rounded-xl border border-line px-3 py-1.5 text-xs transition select-none hover:border-brand",r.supportJs?"bg-brand-soft border-brand/50 text-brand-dark font-medium":"bg-white text-muted"]),title:r.tr("jty.supportJsHint")},[Ie(h("input",{"onUpdate:modelValue":i[2]||(i[2]=o=>r.supportJs=o),type:"checkbox",class:"h-3.5 w-3.5 accent-[var(--color-brand)] cursor-pointer"},null,512),[[He,r.supportJs]]),h("span",null,E(r.tr("jty.supportJsToggle")),1)],10,it)]),h("div",ot,[r.direction==="yaml-to-json"||!r.supportJs?(D(),F("button",{key:0,type:"button",class:"inline-flex items-center gap-1 rounded-lg border border-line bg-white px-2.5 py-1.5 text-muted hover:border-brand hover:text-brand-dark transition active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed",disabled:r.isEmpty||!r.valid,onClick:r.formatInPlace},[i[18]||(i[18]=h("svg",{class:"h-3.5 w-3.5 text-brand",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83","stroke-linecap":"round"})],-1)),h("span",null,E(r.tr("jty.format")),1)],8,lt)):ne("",!0),r.formatHint?(D(),F("span",st,E(r.tr("jty.formatSuccess")),1)):ne("",!0),h("button",{type:"button",class:"inline-flex items-center gap-1 rounded-lg border border-line bg-white px-2.5 py-1.5 text-muted hover:border-brand hover:text-brand-dark transition",onClick:r.loadSample},E(r.tr("jty.sample")),1),h("button",{type:"button",class:"inline-flex items-center gap-1 rounded-lg border border-line bg-white px-2.5 py-1.5 text-muted hover:border-danger hover:text-danger transition",disabled:r.isEmpty,onClick:r.clearInput},E(r.tr("jty.clear")),9,ct),r.savedHint?(D(),F("span",at,E(r.tr("jty.saved")),1)):ne("",!0)])]),h("div",ut,[h("div",pt,[h("span",ft,E(r.tr("jty.indent"))+":",1),h("button",{type:"button",class:ie(["bu-chip",{"bu-chip-active":r.indent===2}]),onClick:i[3]||(i[3]=o=>r.indent=2)}," 2 ",2),h("button",{type:"button",class:ie(["bu-chip",{"bu-chip-active":r.indent===4}]),onClick:i[4]||(i[4]=o=>r.indent=4)}," 4 ",2)]),h("label",dt,[Ie(h("input",{"onUpdate:modelValue":i[5]||(i[5]=o=>r.sortKeys=o),type:"checkbox",class:"h-3.5 w-3.5 accent-[var(--color-brand)]"},null,512),[[He,r.sortKeys]]),h("span",null,E(r.tr("jty.sortKeys")),1)]),r.direction==="json-to-yaml"?(D(),F(Ue,{key:0},[h("label",mt,[Ie(h("input",{"onUpdate:modelValue":i[6]||(i[6]=o=>r.noArrayIndent=o),type:"checkbox",class:"h-3.5 w-3.5 accent-[var(--color-brand)]"},null,512),[[He,r.noArrayIndent]]),h("span",null,E(r.tr("jty.noArrayIndent")),1)]),h("div",ht,[h("span",gt,E(r.tr("jty.quoteStyle"))+":",1),h("button",{type:"button",class:ie(["bu-chip",{"bu-chip-active":r.quotingType==="auto"}]),onClick:i[7]||(i[7]=o=>r.quotingType="auto")},E(r.tr("jty.quoteAuto")),3),h("button",{type:"button",class:ie(["bu-chip",{"bu-chip-active":r.quotingType==="single"}]),onClick:i[8]||(i[8]=o=>r.quotingType="single")},E(r.tr("jty.quoteSingle")),3),h("button",{type:"button",class:ie(["bu-chip",{"bu-chip-active":r.quotingType==="double"}]),onClick:i[9]||(i[9]=o=>r.quotingType="double")},E(r.tr("jty.quoteDouble")),3)])],64)):r.supportJs?(D(),F(Ue,{key:1},[h("div",yt,[h("button",{type:"button",class:ie(["bu-chip",{"bu-chip-active":r.jsOutputTarget==="js"}]),onClick:i[10]||(i[10]=o=>r.jsOutputTarget="js")},E(r.tr("jty.outputJs")),3),h("button",{type:"button",class:ie(["bu-chip",{"bu-chip-active":r.jsOutputTarget==="json"}]),onClick:i[11]||(i[11]=o=>r.jsOutputTarget="json")},E(r.tr("jty.outputJson")),3)]),r.jsOutputTarget==="js"?(D(),F(Ue,{key:0},[h("label",bt,[Ie(h("input",{"onUpdate:modelValue":i[12]||(i[12]=o=>r.jsUnquoteKeys=o),type:"checkbox",class:"h-3.5 w-3.5 accent-[var(--color-brand)]"},null,512),[[He,r.jsUnquoteKeys]]),h("span",null,E(r.tr("jty.unquoteKeys")),1)]),h("label",xt,[Ie(h("input",{"onUpdate:modelValue":i[13]||(i[13]=o=>r.jsTrailingComma=o),type:"checkbox",class:"h-3.5 w-3.5 accent-[var(--color-brand)]"},null,512),[[He,r.jsTrailingComma]]),h("span",null,E(r.tr("jty.trailingComma")),1)]),h("div",vt,[h("span",wt,E(r.tr("jty.wrapper"))+":",1),Ie(h("select",{"onUpdate:modelValue":i[14]||(i[14]=o=>r.jsDeclaration=o),class:"rounded-lg border border-line bg-white px-2 py-1 text-xs text-ink focus:border-brand focus:outline-none"},[h("option",At,E(r.tr("jty.wrapperNone")),1),h("option",_t,E(r.tr("jty.wrapperConst")),1),h("option",kt,E(r.tr("jty.wrapperExport")),1)],512),[[_r,r.jsDeclaration]])])],64)):ne("",!0)],64)):ne("",!0)])]),h("div",Ct,[h("div",Tt,[h("div",St,[h("div",jt,[h("h2",Et,E(r.direction==="json-to-yaml"?r.supportJs?r.tr("jty.inputJs"):r.tr("jty.inputJson"):r.tr("jty.inputYaml")),1),r.isEmpty?(D(),F("span",It,E(r.tr("jty.emptyInput")),1)):r.valid?(D(),F("span",Ot,[i[19]||(i[19]=h("svg",{class:"h-3 w-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[h("path",{d:"M20 6L9 17l-5-5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),en(" "+E((r.direction==="yaml-to-json",r.tr("jty.valid"))),1)])):(D(),F("span",Lt,[i[20]||(i[20]=h("svg",{class:"h-3 w-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[h("circle",{cx:"12",cy:"12",r:"9"}),h("line",{x1:"12",y1:"8",x2:"12",y2:"12","stroke-linecap":"round"}),h("line",{x1:"12",y1:"16",x2:"12.01",y2:"16","stroke-linecap":"round"})],-1)),en(" "+E(r.tr("jty.invalid")),1)]))]),r.error?(D(),F("button",{key:0,type:"button",class:"inline-flex items-center gap-1 rounded-md bg-danger-soft px-2 py-0.5 text-[11px] font-medium text-danger hover:bg-danger hover:text-white transition",onClick:r.jumpToErrorLine},[i[21]||(i[21]=h("svg",{class:"h-3 w-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("circle",{cx:"12",cy:"12",r:"3"}),h("path",{d:"M12 2v3m0 14v3M2 12h3m14 0h3"})],-1)),h("span",null,E(r.tr("jty.jumpToError")),1)])):ne("",!0)]),h("div",Mt,[h("div",Rt,[(D(!0),F(Ue,null,jn(r.inputLines,o=>(D(),F("div",{key:o,class:ie(["px-2 leading-6 transition-colors",{"bg-danger/15 text-danger font-bold relative":r.error&&r.error.line===o}])},[r.error&&r.error.line===o?(D(),F("span",Nt,"!")):ne("",!0),en(" "+E(o),1)],2))),128))],512),Ie(h("textarea",{ref:"textareaRef","onUpdate:modelValue":i[15]||(i[15]=o=>r.input=o),spellcheck:"false",placeholder:r.direction==="json-to-yaml"?r.supportJs?r.tr("jty.placeholderJs"):r.tr("jty.placeholderJson"):r.tr("jty.placeholderYaml"),class:"flex-1 resize-none bg-white p-3 font-mono text-xs sm:text-sm text-ink leading-6 placeholder:text-faint focus:outline-none overflow-auto",onScroll:r.onTextareaScroll},null,40,qt),[[kr,r.input]])]),h("div",Pt,[h("span",null,E(r.stats.inChars)+" "+E(r.tr("jty.chars"))+" · "+E(r.stats.inLines)+" "+E(r.tr("jty.lines"))+" · "+E(r.sizeLabel(r.stats.inBytes)),1),r.error?(D(),F("span",Ft,E(r.tr("jty.errorLineCol",{line:r.error.line,col:r.error.column})),1)):ne("",!0)])]),h("div",Dt,[h("div",Yt,[h("div",Ht,[h("h2",Ut,E(r.direction==="json-to-yaml"?r.tr("jty.outputYaml"):r.supportJs&&r.jsOutputTarget==="js"?r.tr("jty.outputJs"):r.tr("jty.outputJson")),1)]),h("div",Bt,[h("button",{type:"button",class:"inline-flex shrink-0 items-center gap-1 rounded-lg border border-line bg-white px-2 py-1 text-xs text-muted transition hover:border-brand hover:text-brand-dark disabled:cursor-not-allowed disabled:opacity-40",disabled:!r.output,onClick:r.downloadOutput},[i[22]||(i[22]=h("svg",{class:"h-3.5 w-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[h("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"}),h("polyline",{points:"7 10 12 15 17 10"}),h("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)),h("span",null,E(r.tr("jty.download")),1)],8,Kt),Ir(r.CopyButton,{locale:A.locale,value:r.output},null,8,["locale","value"])])]),h("div",Jt,[r.isEmpty?(D(),F("div",Vt,E(r.tr("jty.emptyOutput")),1)):r.error?(D(),F("div",Gt,[h("div",Wt,[h("div",Qt,[h("div",Xt,[i[23]||(i[23]=h("svg",{class:"h-4 w-4 shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("circle",{cx:"12",cy:"12",r:"9"}),h("line",{x1:"12",y1:"8",x2:"12",y2:"12","stroke-linecap":"round"}),h("line",{x1:"12",y1:"16",x2:"12.01",y2:"16","stroke-linecap":"round"})],-1)),h("span",null,E(r.tr("jty.error")),1)]),h("button",{type:"button",class:"rounded-md bg-white border border-danger/30 px-2 py-1 text-xs text-danger font-medium hover:bg-danger hover:text-white transition",onClick:r.jumpToErrorLine},E(r.tr("jty.jumpToError")),1)]),h("p",zt,E(r.error.message),1),h("p",Zt,E(r.tr("jty.errorLineCol",{line:r.error.line,col:r.error.column})),1),r.error.snippet?(D(),F("div",$t,E(r.error.snippet),1)):ne("",!0)])])):(D(),F("div",ei,[h("pre",{class:"font-mono text-xs sm:text-sm text-ink whitespace-pre leading-6 select-text",innerHTML:r.highlightedOutput},null,8,ni)]))]),h("div",ri,[h("span",null,E(r.stats.outChars)+" "+E(r.tr("jty.chars"))+" · "+E(r.stats.outLines)+" "+E(r.tr("jty.lines"))+" · "+E(r.sizeLabel(r.stats.outBytes)),1),r.output&&r.stats.ratio?(D(),F("span",ti,E(r.tr("jty.ratio"))+": "+E(r.stats.ratio),1)):ne("",!0)])])]),r.history.length>0?(D(),F("div",ii,[h("div",oi,[h("div",null,[h("h3",li,E(r.tr("jty.history")),1),h("p",si,E(r.tr("jty.historyHint",{n:r.MAX_HISTORY_LIMIT})),1)]),h("button",{type:"button",class:"text-xs text-danger hover:underline font-medium",onClick:r.askClearHistory},E(r.tr("jty.historyClear")),1)]),h("div",ci,[(D(!0),F(Ue,null,jn(r.history,o=>(D(),F("div",{key:o.id,class:"flex items-center justify-between py-2.5 text-xs text-muted hover:text-ink transition"},[h("div",ai,[h("span",{class:ie(["inline-block shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium",o.direction==="json-to-yaml"?"bg-brand-soft text-brand-dark":"bg-canvas text-ink border border-line"])},E(o.direction==="json-to-yaml"?"JSON → YAML":"YAML → JSON"),3),o.supportJs?(D(),F("span",ui," JS Mode ")):ne("",!0),h("span",pi,E(o.content.slice(0,70).replace(/\s+/g," ")),1)]),h("div",fi,[h("span",di,E(r.formatTime(o.createdAt)),1),h("button",{type:"button",class:"rounded bg-canvas px-2 py-1 text-xs text-brand hover:bg-brand-soft font-medium transition",onClick:u=>r.loadHistoryItem(o)},E(r.tr("jty.historyLoad")),9,mi),h("button",{type:"button",class:"text-faint hover:text-danger transition",title:"Delete",onClick:u=>r.deleteHistoryItem(o.id)},[...i[24]||(i[24]=[h("svg",{class:"h-3.5 w-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M18 6L6 18M6 6l12 12","stroke-linecap":"round"})],-1)])],8,hi)])]))),128))])])):ne("",!0),h("div",gi,[h("a",yi,E(r.tr("jty.attribution")),1)]),r.pending?(D(),F("div",bi,[h("div",xi,[h("h4",vi,E(r.pending.title),1),h("p",wi,E(r.pending.message),1),h("div",Ai,[h("button",{type:"button",class:"rounded-lg border border-line bg-white px-3 py-1.5 text-muted hover:bg-canvas transition",onClick:i[16]||(i[16]=o=>r.pending=null)},E(r.tr("jty.cancel")),1),h("button",{type:"button",class:"rounded-lg bg-danger px-3 py-1.5 font-medium text-white hover:bg-danger/90 transition shadow-xs",onClick:r.runPending},E(r.tr("jty.confirm")),1)])])])):ne("",!0)])}const Ki=Er(zr,[["render",_i]]);export{Ki as default};
