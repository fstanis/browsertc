var e,t,n,a,i,r,o,s,l,c,u,_,h,d,p={},f=[],m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,g=Array.isArray;function b(e,t){for(var n in t)e[n]=t[n];return e}function y(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n){var a,i,r,o={};for(r in t)"key"==r?a=t[r]:"ref"==r?i=t[r]:o[r]=t[r];if(arguments.length>2&&(o.children=arguments.length>3?s.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===o[r]&&(o[r]=e.defaultProps[r]);return w(e,o,a,i,null)}function w(e,t,n,a,i){var r={type:e,props:t,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==i?++c:i,__i:-1,__u:0};return null==i&&null!=l.vnode&&l.vnode(r),r}function k(e){return e.children}function C(e,t){this.props=e,this.context=t}function D(e,t){if(null==t)return e.__?D(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?D(e):null}function x(e){(!e.__d&&(e.__d=!0)&&u.push(e)&&!E.__r++||_!==l.debounceRendering)&&((_=l.debounceRendering)||h)(E)}function E(){var e,t,n,a,i,r,o,s,c;for(u.sort(d);e=u.shift();)e.__d&&(t=u.length,a=void 0,r=(i=(n=e).__v).__e,s=[],c=[],(o=n.__P)&&((a=b({},i)).__v=i.__v+1,l.vnode&&l.vnode(a),U(o,a,i,n.__n,void 0!==o.ownerSVGElement,32&i.__u?[r]:null,s,null==r?D(i):r,!!(32&i.__u),c),a.__.__k[a.__i]=a,F(s,a,c),a.__e!=r&&function e(t){var n,a;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(a=t.__k[n])&&null!=a.__e){t.__e=t.__c.base=a.__e;break}return e(t)}}(a)),u.length>t&&u.sort(d));E.__r=0}function S(e,t,n,a,i,r,o,s,l,c,u){var _,h,d,m,b,y=a&&a.__k||f,v=t.length;for(n.__d=l,function(e,t,n){var a,i,r,o,s,l=t.length,c=n.length,u=c,_=0;for(e.__k=[],a=0;a<l;a++)null!=(i=e.__k[a]=null==(i=t[a])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?w(null,i,null,null,i):g(i)?w(k,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?w(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=e,i.__b=e.__b+1,s=function(e,t,n,a){var i=e.key,r=e.type,o=n-1,s=n+1,l=t[n];if(null===l||l&&i==l.key&&r===l.type)return n;if(a>(null!=l&&0==(131072&l.__u)?1:0))for(;o>=0||s<t.length;){if(o>=0){if((l=t[o])&&0==(131072&l.__u)&&i==l.key&&r===l.type)return o;o--}if(s<t.length){if((l=t[s])&&0==(131072&l.__u)&&i==l.key&&r===l.type)return s;s++}}return -1}(i,n,o=a+_,u),i.__i=s,r=null,-1!==s&&(u--,(r=n[s])&&(r.__u|=131072)),null==r||null===r.__v?(-1==s&&_--,"function"!=typeof i.type&&(i.__u|=65536)):s!==o&&(s===o+1?_++:s>o?u>l-o?_+=s-o:_--:_=s<o&&s==o-1?s-o:0,s!==a+_&&(i.__u|=65536))):(r=n[a])&&null==r.key&&r.__e&&(r.__e==e.__d&&(e.__d=D(r)),P(r,r,!1),n[a]=null,u--);if(u)for(a=0;a<c;a++)null!=(r=n[a])&&0==(131072&r.__u)&&(r.__e==e.__d&&(e.__d=D(r)),P(r,r))}(n,t,y),l=n.__d,_=0;_<v;_++)null!=(d=n.__k[_])&&"boolean"!=typeof d&&"function"!=typeof d&&(h=-1===d.__i?p:y[d.__i]||p,d.__i=_,U(e,d,h,i,r,o,s,l,c,u),m=d.__e,d.ref&&h.ref!=d.ref&&(h.ref&&L(h.ref,null,d),u.push(d.ref,d.__c||m,d)),null==b&&null!=m&&(b=m),65536&d.__u||h.__k===d.__k?l=function e(t,n,a){var i,r;if("function"==typeof t.type){for(i=t.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=t,n=e(i[r],n,a));return n}return t.__e!=n&&(a.insertBefore(t.__e,n||null),n=t.__e),n&&n.nextSibling}(d,l,e):"function"==typeof d.type&&void 0!==d.__d?l=d.__d:m&&(l=m.nextSibling),d.__d=void 0,d.__u&=-196609);n.__d=l,n.__e=b}function A(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||m.test(t)?n:n+"px"}function N(e,t,n,a,i){var r;e:if("style"===t){if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof a&&(e.style.cssText=a=""),a)for(t in a)n&&t in n||A(e.style,t,"");if(n)for(t in n)a&&n[t]===a[t]||A(e.style,t,n[t])}}else if("o"===t[0]&&"n"===t[1])r=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase() in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?a?n.u=a.u:(n.u=Date.now(),e.addEventListener(t,r?T:I,r)):e.removeEventListener(t,r?T:I,r);else{if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&"role"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function I(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(l.event?l.event(e):e)}function T(e){return this.l[e.type+!0](l.event?l.event(e):e)}function U(e,t,n,a,i,r,o,c,u,_){var h,d,f,m,v,w,x,E,A,I,T,U,F,L,P,O=t.type;if(void 0!==t.constructor)return null;128&n.__u&&(u=!!(32&n.__u),r=[c=t.__e=n.__e]),(h=l.__b)&&h(t);e:if("function"==typeof O)try{if(E=t.props,A=(h=O.contextType)&&a[h.__c],I=h?A?A.props.value:h.__:a,n.__c?x=(d=t.__c=n.__c).__=d.__E:("prototype"in O&&O.prototype.render?t.__c=d=new O(E,I):(t.__c=d=new C(E,I),d.constructor=O,d.render=z),A&&A.sub(d),d.props=E,d.state||(d.state={}),d.context=I,d.__n=a,f=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=O.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=b({},d.__s)),b(d.__s,O.getDerivedStateFromProps(E,d.__s))),m=d.props,v=d.state,d.__v=t,f)null==O.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==O.getDerivedStateFromProps&&E!==m&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(E,I),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(E,d.__s,I)||t.__v===n.__v)){for(t.__v!==n.__v&&(d.props=E,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(e){e&&(e.__=t)}),T=0;T<d._sb.length;T++)d.__h.push(d._sb[T]);d._sb=[],d.__h.length&&o.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(E,d.__s,I),null!=d.componentDidUpdate&&d.__h.push(function(){d.componentDidUpdate(m,v,w)})}if(d.context=I,d.props=E,d.__P=e,d.__e=!1,U=l.__r,F=0,"prototype"in O&&O.prototype.render){for(d.state=d.__s,d.__d=!1,U&&U(t),h=d.render(d.props,d.state,d.context),L=0;L<d._sb.length;L++)d.__h.push(d._sb[L]);d._sb=[]}else do d.__d=!1,U&&U(t),h=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++F<25)d.state=d.__s,null!=d.getChildContext&&(a=b(b({},a),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(w=d.getSnapshotBeforeUpdate(m,v)),S(e,g(P=null!=h&&h.type===k&&null==h.key?h.props.children:h)?P:[P],t,n,a,i,r,o,c,u,_),d.base=t.__e,t.__u&=-161,d.__h.length&&o.push(d),x&&(d.__E=d.__=null)}catch(e){t.__v=null,u||null!=r?(t.__e=c,t.__u|=u?160:32,r[r.indexOf(c)]=null):(t.__e=n.__e,t.__k=n.__k),l.__e(e,t,n)}else null==r&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,a,i,r,o,l,c){var u,_,h,d,f,m,b,v=n.props,w=t.props,k=t.type;if("svg"===k&&(i=!0),null!=r){for(u=0;u<r.length;u++)if((f=r[u])&&"setAttribute"in f==!!k&&(k?f.localName===k:3===f.nodeType)){e=f,r[u]=null;break}}if(null==e){if(null===k)return document.createTextNode(w);e=i?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,w.is&&w),r=null,l=!1}if(null===k)v===w||l&&e.data===w||(e.data=w);else{if(r=r&&s.call(e.childNodes),v=n.props||p,!l&&null!=r)for(v={},u=0;u<e.attributes.length;u++)v[(f=e.attributes[u]).name]=f.value;for(u in v)f=v[u],"children"==u||("dangerouslySetInnerHTML"==u?h=f:"key"===u||u in w||N(e,u,null,f,i));for(u in w)f=w[u],"children"==u?d=f:"dangerouslySetInnerHTML"==u?_=f:"value"==u?m=f:"checked"==u?b=f:"key"===u||l&&"function"!=typeof f||v[u]===f||N(e,u,f,v[u],i);if(_)l||h&&(_.__html===h.__html||_.__html===e.innerHTML)||(e.innerHTML=_.__html),t.__k=[];else if(h&&(e.innerHTML=""),S(e,g(d)?d:[d],t,n,a,i&&"foreignObject"!==k,r,o,r?r[0]:n.__k&&D(n,0),l,c),null!=r)for(u=r.length;u--;)null!=r[u]&&y(r[u]);l||(u="value",void 0===m||m===e[u]&&("progress"!==k||m)&&("option"!==k||m===v[u])||N(e,u,m,v[u],!1),u="checked",void 0!==b&&b!==e[u]&&N(e,u,b,v[u],!1))}return e}(n.__e,t,n,a,i,r,o,u,_);(h=l.diffed)&&h(t)}function F(e,t,n){t.__d=void 0;for(var a=0;a<n.length;a++)L(n[a],n[++a],n[++a]);l.__c&&l.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){l.__e(e,t.__v)}})}function L(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){l.__e(e,n)}}function P(e,t,n){var a,i;if(l.unmount&&l.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||L(a,null,t)),null!=(a=e.__c)){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(e){l.__e(e,t)}a.base=a.__P=null,e.__c=void 0}if(a=e.__k)for(i=0;i<a.length;i++)a[i]&&P(a[i],t,n||"function"!=typeof e.type);n||null==e.__e||y(e.__e),e.__=e.__e=e.__d=void 0}function z(e,t,n){return this.constructor(e,n)}s=f.slice,l={__e:function(e,t,n,a){for(var i,r,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(e)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(e,a||{}),o=i.__d),o)return i.__E=i}catch(t){e=t}throw e}},c=0,C.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=b({},this.state),"function"==typeof e&&(e=e(b({},n),this.props)),e&&b(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),x(this))},C.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),x(this))},C.prototype.render=k,u=[],h="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,d=function(e,t){return e.__v.__b-t.__v.__b},E.__r=0;const O=["orca","shark","capybara","fox","turtle","fish","dolphin","armadillo","hedgehog","dhole","dog","cat","jaguar","cheetah","leopard","cougar","lion","tapir","anteater","monkey","snake","scorpion","jerboa","opossum","stingray","colobus","euplectes","jay","finch","hawk","beaver","mouse","moose","alligator","salamander","tadpole","astrapia","pug","greyhound","foxhound","bushbaby","aardvark","aardwolf","pangolin","porcupine","genet","springhare","kangaroo","koala","ostrich","dingo","platypus","camel","horse","echidna","wombat","crocodile","whale","narwhal","humpback","marmoset","tucuxi","beluga","porpoise","sparrow","pigeon","owl","hummingbird","robin","starling","manakin","warbler","penguin","snowfinch","broadbill","thrush","bishop","swallow","bittern","caracara","manx","possum","lemur","deer","peacock","ratfish","vulture","rat","takaya","skunk","tuxedo","turkey","elephant","civet","ainu","husky","akita","alpaca","spaniel","terrier","hare","auroch","axolotl","bandicoot","beagle","beago","collie","tiger","liger","rhino","bobcat","corgi","dachshund","giraffe","bonobo","cetacean","bear","hyena","burmese","caracal","goat","chameleon","chihuahua","chimp","cow","cuscus","pinscher","dunker","mau","ermine","feist","spitz","squirrel","gerbil","hamster","panda","gibbon","flyingfox","jackal","macaque","kinkajou","lynx","manatee","mole","ocelot","otter","panther","pig","prairiedog","puma","hippo","quokka","quoll","bunny","raccoon","tamarin","reindeer","hyrax","saiga","sable","serval","spanador","springbok","tuatara","dropbear","vaquita","wallaby","walrus","weasel","wolf","zebra","zonkey","donkey","mule","zebu","cuttlefish","unicorn","meerkat","jackalope","heron","fawn","warthog","drake","badger","zapus","yak","werewolf","tahr","fossa","xerus","centaur","raptor","long","sheep","quetzal","wildebeest","motmot","coati","drongo","boston","myth","saga","fable","folk","fairy","hound","risk","coin","tyrannosaurus","velociraptor","siren","mudpuppy","ferret","roborovski","bee","dragon","bearded","beardie","pogona","chicken","hen","rooster","quail","grouse","comet","halley","hale","bopp","sungrazing","sungrazer","exocomet","hartley","borrelly","wild","ison","encke","atlas","hyakutake","tempel","west","osiris","basilisk","ctesias","equalacorn","wyvern","hippogriff","hippogryph","griffin","hydra","chimera","phoenix","faun","minotaur","amarok","gorgon","cerberus","orthrus","sphinx","ladon","pegasus","scylla","mermaid","nessie","hippocampus","warg","fenrir","typhon","wampus","bicorn","manticore","qilin","fluffy","bun","mercat","coyote","alpine","lamancha","angora","beetal","girgentana","jamnapari","kamori","kiko","oberhasli","pygmy","pygora","rove","saanen","bilberry","adal","alai","afrino","alpines","ancon","blue","boreray","border","cheviot","churra","cormo","dolly","dala","dorper","dohne","gute","han","jacob","kooka","latxa","lleyn","lonk","merino","nilgiri","orkhon","rya","soay","xalda","ewe","lamb","great","emperor","king","adelie","chinstrap","gentoo","little","banded","magellanic","humboldt","crested","fiordland","snares","rockhopper","royal","macaroni","bison","buffalo","gaur","saola","anoa","banteng","beefalo","yakalo","yattle","tigon","jaglion","leopon","savannah","toyger","cheetoh","grolar","zebroid","coywolf","wholphin","narluga","cama","dzo","zubron","geep","hinny","mulard","zeedonk","zorse","pumapard","pizzly","coydog","whydah","pheasant","lyrebird","peafowl","tayra","zorilla","mara","galago","tenrec","bettong","tamandua","cusimanse","polecat","degu","coatimundi","diplodocus","stegosaurus","zuul","allosaurus","baryonyx","edmontosaurus","iguanodon","minmi","triceratops","troodon","trex","shetland","pinto","appaloosa","auxois","shire","brumby","fell","java","pony","welara","mammoth","burro","poitou","spotted","snowy","barn","barred","boreal","elf","barking","buru","chaco","chestnut","cinnebar","cloudforest","dusky","tawny","berylline","calliope","rufous","xantu","violetear","mango","bumblebee","emerald","cinnamon","golden","pumpkinseed","ruffe","walleye","perch","bowfin","burbot","goldeye","mooneye","dace","quillback","stonecat","albacore","alewife","amberjack","sole","codlet","char","searobin","arowana","bonito","saury","ayu","silverside","banjo","barb","barbel","bangus","batfish","danio","betta","bigeye","bicolor","bitterling","bleak","blenny","tuna","boga","duck","brill","brotula","buri","goby","catla","chimaera","cobia","coho","dab","darter","discus","duckbill","drum","elver","featherback","garibaldi","ghost","ghoul","goblin","dojo","hake","halfmoon","halfbeak","hamlet","halibut","halosaur","hoki","huchen","ide","inanga","ilish","inconnu","dory","koi","kanyu","kokanee","lenok","ling","mahi","marlin","mora","morray","mulley","stargazer","nase","neon","daggertooth","noodlefish","notothen","tetra","orfe","opah","opaleye","pancake","panga","paradise","parore","piarucu","pirate","platy","pleco","powan","pompano","sparidae","porgy","rohu","rudd","skate","squeaker","tailor","uaru","vimba","wahoo","coelacanth","llama","shrimp","prawn","lobster","chipmunk","tails","talpidae","shrew","talpa","mogera","scaptonyx","dymecodon","neurotrichini","uropsilus","desmana","fynbos","panthera","onca","pardus","leo","snow","tigris","clouded","neofelis","nebulosa","felis","acinonyx","eland","oryx","gemsbok","gazella","nyala","kudu","giraffa","raven","corvus","mellori","bat","sapsucker","woodpecker","nuthatch","flicker","junco","anaconda","binturong","boa","brolga","cassowary","cockatoo","cormorant","curlew","dove","eagle","emu","kingfisher","falcon","gila","monster","goose","magpie","guineafowl","ibis","iguana","kite","lorikeet","macaw","monitor","parrot","pitta","python","rhinoceros","skink","stork","tortoise"],j=["lizard","crocodile","snake","dragon","catfish","bass","salmon","tuna","hammerhead","eel","carp","trout","mahi","snapper","bluegill","sole","cod","triceratops","edmontosaurus","saurolophus","liberty","justice","pangolin","turtle","tortoise","alligator","butterfly","iguana","pineapplefish","pinecone","anaconda","puffin","cardassian","cloud","nominal","ordinal","interval","ratio","vernier","lime","scala","boa","cobra","richter","kelvin","celsius","decibel","beaufort","mohs","pauling","python","mamba","alkaline","climb","moth","eagle","woodpecker","morpho","tautara","anoles","theropod","owl","frog","lionfish","morray","clownfish","ostrich","stork","egret","map","grue","tiyanki","broadnose","basking","goblin","porbeagle","chuckwalla","tawny","bramble","kitefin","agama","komodo","bull","monitor","chameleon","tegus","gecko","micro","gray","allosaurus","glyptodon","basilisk","cordylus","tegu","sailfin","mountain","dinosaur","goanna","herring","minnow","perch","coho","lake","arctic","pumpkinseed","gopher","chickadee","toad","shark","roach","tyrannosaurus","velociraptor","bee","bearded","beardie","pogona","chicken","hen","rooster","quail","grouse","universe","galaxy","atlas","wyvern","hydra","gorgon","chimera","ladon","scylla","mermaid","nessie","hippocampus","typhon","qilin","acoustic","alpha","altered","augmented","bebop","beta","blues","bushi","byzantine","chromatic","delta","diatonic","diminished","dominant","dorian","enigmatic","freygish","gamma","harmonic","heptatonic","hexatonic","hirajoshi","in","insen","istrian","iwato","jazz","locrian","major","minor","mixolydian","musical","octatonic","pentatonic","phrygian","pierce","prometheus","pythagorean","symmetric","tet","tone","tritone","yo","beaver","hops","salak","mercat","great","emperor","adelie","chinstrap","gentoo","little","banded","magellanic","humboldt","crested","fiordland","snares","rockhopper","royal","macaroni","vibe","vibes","banana","ulmer","bortle","palermo","torino","forel","ule","pyruvate","kardashev","ionian","aeolian","sunfish","gar","pike","muskellunge","pickerel","ruffe","walleye","bowfin","burbot","goldeye","mooneye","dace","quillback","stonecat","albacore","alewife","amberjack","codlet","char","searobin","arowana","bonito","saury","ayu","silverside","banjo","barb","barbel","bangus","banfish","ray","danio","betta","bigeye","bicolor","bitterling","bleak","blenny","boga","duck","brill","brotula","buri","goby","catla","chimaera","cobia","dab","darter","discus","duckbill","drum","elver","featherback","garibaldi","ghost","ghoul","dojo","hake","halfmoon","halfbeak","hamlet","halibut","halosaur","hoki","huchen","ide","inanga","ilish","inconnu","dory","koi","kanyu","kokanue","lenok","ling","manta","marlin","mora","mulley","stargazer","nase","neon","daggertooth","noodlefish","notothen","tetra","orfe","opah","opaleye","pancake","panga","paradise","parore","pirarucu","pirate","platy","pleco","powan","pomano","paridae","porgy","rohu","rudd","skate","squeaker","tailor","uaru","vimba","wahoo","zebra","coelacanth","gila","monster","sun","cirius","canopus","arcturus","vega","capella","rigel","procyon","achernar","betelgeuse","hadar","altair","acrux","aldebaran","antares","spica","pollux","fomalhaut","deneb","mimosa","regulus","adhara","shaula","castor","gacrux","bellatrix","elnath","miaplacidus","alnilam","alnair","alnitak","alioth","dubhe","mirfak","wezen","sargas","avior","alkaid","menkalinan","atria","alhena","peacock","alsephina","mirzam","alphard","polaris","hamal","algieba","diphda","mizar","nunki","menkent","mirach","alpheratz","kochab","saiph","denebola","algol","tiaki","mintaka","draconis","centauri","becrux","godzilla","sirius","vector"];class H{#e;set webDavUrl(e){this.#e.webDavUrl=e,this.#t()}get webDavUrl(){return this.#n(),this.#e.webDavUrl}set webDavUsername(e){this.#e.webDavUsername=e,this.#t()}get webDavUsername(){return this.#n(),this.#e.webDavUsername}set webDavPassword(e){this.#e.webDavPassword=e,this.#t()}get webDavPassword(){return this.#n(),this.#e.webDavPassword}set deviceId(e){this.#e.deviceId=e,this.#t()}get deviceId(){return this.#n(),this.#e.deviceId}set meteredApiKey(e){this.#e.meteredApiKey=e,this.#t()}get meteredApiKey(){return this.#n(),this.#e.meteredApiKey}get webDavCreds(){return this.#n(),{url:this.#e.webDavUrl,username:this.#e.webDavUsername,password:this.#e.webDavPassword}}get isValid(){return this.#n(),this.#a(this.#e.webDavUrl)&&""!==this.#e.deviceId&&""!==this.#e.meteredApiKey}#a(e){try{return new URL(e),!0}catch(e){return!1}}#n(){this.#e=JSON.parse(localStorage.getItem("config")),this.#e||(this.#e={webDavUrl:"",webDavUsername:"",webDavPassword:"",deviceId:function(){let e=Math.floor(Math.random()*O.length),t=Math.floor(Math.random()*j.length);return`${O[e]}-${j[t]}`}(),meteredApiKey:""},this.#t())}#t(){localStorage.setItem("config",JSON.stringify(this.#e))}}var M={};(W="undefined"==typeof DO_NOT_EXPORT_CRC?M:{}).version="1.2.2",G=(K=function(e){var t=0,n=0,a=0,i="undefined"!=typeof Int32Array?new Int32Array(4096):Array(4096);for(a=0;256!=a;++a)i[a]=e[a];for(a=0;256!=a;++a)for(n=e[a],t=256+a;t<4096;t+=256)n=i[t]=n>>>8^e[255&n];var r=[];for(a=1;16!=a;++a)r[a-1]="undefined"!=typeof Int32Array?i.subarray(256*a,256*a+256):i.slice(256*a,256*a+256);return r}(B=function(){for(var e=0,t=Array(256),n=0;256!=n;++n)e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=n)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1,t[n]=e;return"undefined"!=typeof Int32Array?new Int32Array(t):t}()))[0],J=K[1],X=K[2],Q=K[3],Y=K[4],Z=K[5],ee=K[6],et=K[7],en=K[8],ea=K[9],ei=K[10],er=K[11],eo=K[12],es=K[13],el=K[14],W.table=B,W.bstr=function(e,t){for(var n=-1^t,a=0,i=e.length;a<i;)n=n>>>8^B[(n^e.charCodeAt(a++))&255];return~n},W.buf=function(e,t){for(var n=-1^t,a=e.length-15,i=0;i<a;)n=el[e[i++]^255&n]^es[e[i++]^n>>8&255]^eo[e[i++]^n>>16&255]^er[e[i++]^n>>>24]^ei[e[i++]]^ea[e[i++]]^en[e[i++]]^et[e[i++]]^ee[e[i++]]^Z[e[i++]]^Y[e[i++]]^Q[e[i++]]^X[e[i++]]^J[e[i++]]^G[e[i++]]^B[e[i++]];for(a+=15;i<a;)n=n>>>8^B[(n^e[i++])&255];return~n},W.str=function(e,t){for(var n=-1^t,a=0,i=e.length,r=0,o=0;a<i;)(r=e.charCodeAt(a++))<128?n=n>>>8^B[(n^r)&255]:r<2048?n=(n=n>>>8^B[(n^(192|r>>6&31))&255])>>>8^B[(n^(128|63&r))&255]:r>=55296&&r<57344?(r=(1023&r)+64,o=1023&e.charCodeAt(a++),n=(n=(n=(n=n>>>8^B[(n^(240|r>>8&7))&255])>>>8^B[(n^(128|r>>2&63))&255])>>>8^B[(n^(128|o>>6&15|(3&r)<<4))&255])>>>8^B[(n^(128|63&o))&255]):n=(n=(n=n>>>8^B[(n^(224|r>>12&15))&255])>>>8^B[(n^(128|r>>6&63))&255])>>>8^B[(n^(128|63&r))&255];return~n};class R{#i=new Map;async getFile(){return new Promise((e,t)=>{let n=document.createElement("input");n.type="file",n.onchange=n=>{let{files:a}=n.target;1===a.length?e(a[0]):t(Error("No file selected"))},n.click()})}async sendFile(e,t){let n=0,a=e.size,i=0;t({type:"file",value:{name:e.name,size:e.size,type:e.type}});let r=await this.#r(e),o=M.str(e.name);for(;a>0;){let e=new ArrayBuffer(8),s=new DataView(e);s.setInt32(0,o,!0),s.setUint32(4,i,!0);let l=8192;a<8192&&(l=a);let c=r.slice(n,l+n);n+=l,a-=l,i++;let u=new Blob([e,c]);t(await u.arrayBuffer())}}async #r(e){return new Promise((t,n)=>{let a=new FileReader;a.addEventListener("load",()=>{t(a.result)}),a.addEventListener("error",()=>{n()}),a.readAsArrayBuffer(e)})}async writeFileMetadata(e){let t=M.str(e.name),n=this.#i.get(t);n||(n={written:0,chunks:[]},this.#i.set(t,n)),n.name=e.name,n.size=e.size,n.type=e.type,this.#o(t)}async writeFile(e){let t=e.slice(0,8),n=new DataView(t),a=n.getInt32(0,!0),i=n.getUint32(4,!0),r=e.slice(8),o=this.#i.get(a);o||(o={written:0,chunks:[]},this.#i.set(a,o)),o.chunks[i]=r,o.written+=r.byteLength,this.#o(a)}#o(e){let t=this.#i.get(e);if(t&&t.written===t.size){let n=new Blob(t.chunks);this.#s(t.name,n),this.#i.delete(e)}}#s(e,t){let n=URL.createObjectURL(t),a=document.createElement("a");a.href=n,a.download=e,a.click(),URL.revokeObjectURL(n)}}const $=new H;function q({isOpen:e,onClose:t}){let n=e=>{$[e.currentTarget.name]=e.currentTarget.value};return v("div",null,v("div",{class:"field"},v("label",{class:"label"},"WebDav URL"),v("div",{class:"control"},v("input",{class:"input",type:"url",name:"webDavUrl",placeholder:"https://webdav.example/folder",value:$.webDavUrl,onInput:n}))),v("div",{class:"field"},v("label",{class:"label"},"WebDav username"),v("div",{class:"control"},v("input",{class:"input",type:"text",name:"webDavUsername",value:$.webDavUsername,onInput:n}))),v("div",{class:"field"},v("label",{class:"label"},"WebDav password"),v("div",{class:"control"},v("input",{class:"input",type:"password",name:"webDavPassword",value:$.webDavPassword,onInput:n}))),v("div",{class:"field"},v("label",{class:"label"},"Device name"),v("div",{class:"control"},v("input",{class:"input",type:"text",name:"deviceId",value:$.deviceId,onInput:n}))),v("div",{class:"field"},v("label",{class:"label"},"metered.ca API key"),v("div",{class:"control"},v("input",{class:"input",type:"text",name:"meteredApiKey",value:$.meteredApiKey,onInput:n}))))}function V({value:e,onChange:t,onFolderPick:n,disabled:a}){let i="";return(e=e.trim()).match(/^https?:/)&&(i=v("a",{href:e,target:"_blank"},"Open link")),v("div",null,v("div",{class:"field"},v("div",{class:"control"},v("button",{class:"button",onClick:n},"Load local folder"))),v("div",{class:"field"},v("div",{class:"control"},v("textarea",{class:"textarea is-medium",value:e,onInput:e=>t(e.currentTarget.value),disabled:a}))),i)}var W,B,K,G,J,X,Q,Y,Z,ee,et,en,ea,ei,er,eo,es,el,ec,eu,e_,eh,ed=0,ep=[],ef=[],em=l.__b,eg=l.__r,eb=l.diffed,ey=l.__c,ev=l.unmount;function ew(e,t){l.__h&&l.__h(eu,e,ed||t),ed=0;var n=eu.__H||(eu.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:ef}),n.__[e]}function ek(e){return ed=1,function(e,t,n){var a=ew(ec++,2);if(a.t=e,!a.__c&&(a.__=[n?n(t):eA(void 0,t),function(e){var t=a.__N?a.__N[0]:a.__[0],n=a.t(t,e);t!==n&&(a.__N=[n,a.__[1]],a.__c.setState({}))}],a.__c=eu,!eu.u)){var i=function(e,t,n){if(!a.__c.__H)return!0;var i=a.__c.__H.__.filter(function(e){return e.__c});if(i.every(function(e){return!e.__N}))return!r||r.call(this,e,t,n);var o=!1;return i.forEach(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),!(!o&&a.__c.props===e)&&(!r||r.call(this,e,t,n))};eu.u=!0;var r=eu.shouldComponentUpdate,o=eu.componentWillUpdate;eu.componentWillUpdate=function(e,t,n){if(this.__e){var a=r;r=void 0,i(e,t,n),r=a}o&&o.call(this,e,t,n)},eu.shouldComponentUpdate=i}return a.__N||a.__}(eA,e)}function eC(e,t){var n,a=ew(ec++,3);!l.__s&&(!(n=a.__H)||n.length!==t.length||t.some(function(e,t){return e!==n[t]}))&&(a.__=e,a.i=t,eu.__H.__h.push(a))}function eD(){for(var e;e=ep.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(eE),e.__H.__h.forEach(eS),e.__H.__h=[]}catch(t){e.__H.__h=[],l.__e(t,e.__v)}}l.__b=function(e){eu=null,em&&em(e)},l.__r=function(e){eg&&eg(e),ec=0;var t=(eu=e.__c).__H;t&&(e_===eu?(t.__h=[],eu.__h=[],t.__.forEach(function(e){e.__N&&(e.__=e.__N),e.__V=ef,e.__N=e.i=void 0})):(t.__h.forEach(eE),t.__h.forEach(eS),t.__h=[],ec=0)),e_=eu},l.diffed=function(e){eb&&eb(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==ep.push(t)&&eh===l.requestAnimationFrame||((eh=l.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(a),ex&&cancelAnimationFrame(t),setTimeout(e)},a=setTimeout(n,100);ex&&(t=requestAnimationFrame(n))})(eD)),t.__H.__.forEach(function(e){e.i&&(e.__H=e.i),e.__V!==ef&&(e.__=e.__V),e.i=void 0,e.__V=ef})),e_=eu=null},l.__c=function(e,t){t.some(function(e){try{e.__h.forEach(eE),e.__h=e.__h.filter(function(e){return!e.__||eS(e)})}catch(n){t.some(function(e){e.__h&&(e.__h=[])}),t=[],l.__e(n,e.__v)}}),ey&&ey(e,t)},l.unmount=function(e){ev&&ev(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(e){try{eE(e)}catch(e){t=e}}),n.__H=void 0,t&&l.__e(t,n.__v))};var ex="function"==typeof requestAnimationFrame;function eE(e){var t=eu,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),eu=t}function eS(e){var t=eu;e.__c=e.__(),eu=t}function eA(e,t){return"function"==typeof t?t(e):t}const eN="offer-",eI="answer-";class eT{#l;#c=new Headers;#u=new DOMParser;constructor(e){let t=e.url;if(t.endsWith("/")||(t+="/"),this.#l=new URL(t),e){let{username:t,password:n}=e,a=`Basic ${btoa(`${t}:${n}`)}`;this.#c.append("Authorization",a)}}async getOffer(e){return this.#_(`${eN}${e}`)}async setOffer(e,t){try{await this.#h(`${eI}${e}`)}catch(e){}return this.#d(`${eN}${e}`,t)}async getAnswer(e){return this.#_(`${eI}${e}`)}async setAnswer(e,t){return this.#d(`${eI}${e}`,t)}async listActiveIds(){return await this.#p(),(await this.#f()).filter(({name:e})=>e.startsWith(eN)).sort((e,t)=>{let n=e.timestamp;return t.timestamp-n}).map(({name:e})=>e.replace(eN,""))}async #_(e){let t=new URL(e,this.#l);try{let e=await fetch(t,{headers:this.#c});return{timestamp:new Date(e.headers.get("Last-Modified")).getTime(),sdp:await e.text()}}catch(e){return null}}async #d(e,t){let n=new URL(e,this.#l),a=new Headers(this.#c);a.set("Content-Type","text/plain"),await fetch(n,{method:"PUT",body:t,headers:a})}async #h(e){let t=new URL(e,this.#l);await fetch(t,{method:"DELETE",headers:this.#c})}async #f(){let e=new Headers(this.#c);e.set("Content-Type","text/xml");let t=await fetch(this.#l,{method:"PROPFIND",body:'<?xml version="1.0"?><D:propfind xmlns:D="DAV:"><D:prop><D:resourcetype/><D:getlastmodified/></D:prop></D:propfind>',headers:e}),n=await t.text(),a=this.#u.parseFromString(n,"text/xml"),i=[],r=this.#l.pathname;for(let e of a.getElementsByTagNameNS("DAV:","response")){if(e.querySelector("propstat > prop > resourcetype > collection"))continue;let t=e.querySelector("href").textContent.trim();if(!t.startsWith(r)||(t=t.replace(r,"")).indexOf("/")>-1)continue;let n=e.querySelector("propstat > prop > getlastmodified").textContent.trim();i.push({name:t,timestamp:new Date(n).getTime()})}return i}async #p(){let e=await this.#f(),t=[];for(let{name:n,timestamp:a}of e)(n.startsWith(eN)||n.startsWith(eI))&&Date.now()-a>36e5&&t.push(this.#h(n));await Promise.all(t)}}const eU=Object.freeze({INACTIVE:Symbol("inactive"),CONNECTING:Symbol("connecting"),CONNECTED:Symbol("connected")});class eF extends Event{state;constructor(e){super("state"),this.state=e}}class eL extends Event{type;data;constructor(e){super("message"),"string"==typeof e?(this.data=JSON.parse(e),this.type="json"):e instanceof ArrayBuffer&&(this.data=e,this.type="blob")}}class eP extends EventTarget{connection;#m=eU.INACTIVE;#g;constructor(e){super(),this.connection=this.#b(e)}get state(){return this.#m}set state(e){this.#m!=e&&(this.#m=e,this.dispatchEvent(new eF(e)))}get channel(){return this.#g}set channel(e){this.#g&&this.#g.close(),this.#g=e,this.#g.binaryType="arraybuffer",this.#g.addEventListener("open",this.#y),this.#g.addEventListener("close",this.#y),this.#g.addEventListener("closing",this.#y),this.#g.addEventListener("error",this.#y),this.#g.addEventListener("message",e=>this.dispatchEvent(new eL(e.data)))}sendMessage(e){return!!this.#g&&"open"===this.#g.readyState&&(e instanceof ArrayBuffer?this.#g.send(e):this.#g.send(JSON.stringify(e)),!0)}close(){this.#g&&this.#g.close(),this.connection.close()}async recreate(){this.close();let e=await this.connection.getConfiguration();this.connection=this.#b(e)}#b(e){let t=new RTCPeerConnection(e);return t.addEventListener("connectionstatechange",()=>{console.log(`Connection state: ${event.target.connectionState}`),this.#y()}),t.addEventListener("icegatheringstatechange",()=>{console.log(`ICE state: ${event.target.iceGatheringState}`)}),t.addEventListener("datachannel",this.#y),t.onsignalingstatechange=async e=>{console.log(`Signal state: ${e.target.signalingState}`)},t}#v(){switch(this.connection.connectionState){case"closed":case"new":case"disconnected":case"failed":return eU.INACTIVE;case"connected":if(this.#g&&"open"===this.#g.readyState)return eU.CONNECTED;return eU.CONNECTING;case"connecting":return eU.CONNECTING}}#y=()=>{this.state=this.#v()}}class ez extends eP{id;#w;#k=0;constructor(e,t){super(e),this.#w=t,this.connection.ondatachannel=e=>{this.channel=e.channel},this.connection.onicecandidate=async e=>{this.id&&(await this.#w.setAnswer(this.id,e.target.localDescription.sdp),console.log("sent new answer"))}}async connect(e){this.id||(this.id=e,this.#C())}#C=async()=>{if(this.id){if(this.state!==eU.CONNECTED){let e=await this.#w.getOffer(this.id);if(e||(this.#k=0),e&&e.timestamp>this.#k){this.#k=e.timestamp,await this.connection.setRemoteDescription({sdp:e.sdp,type:"offer"});let t=await this.connection.createAnswer();await this.connection.setLocalDescription(t),console.log("got new offer")}}setTimeout(this.#C,5e3)}}}const eO=new H;let ej=new R;function eH({id:e,iceServers:t}){let n=new eT(eO.webDavCreds),[a,i]=ek(eU.INACTIVE),[r,o]=ek(""),[s,l]=ek(null);return eC(()=>{let a=new ez({iceServers:t},n);return a.addEventListener("message",({type:e,data:t})=>{"json"===e?"text"===t.type?o(t.value):"file"===t.type&&ej.writeFileMetadata(t.value):ej.writeFile(t)}),a.addEventListener("state",e=>{i(e.state)}),a.connect(e),l(a),()=>{a.close()}},[e]),v(V,{value:r,onChange:e=>{o(e),s.sendMessage({type:"text",value:e})},onFolderPick:async()=>{let e=await ej.getFile();await ej.sendFile(e,e=>s.sendMessage(e))},disabled:a!==eU.CONNECTED})}function eM(){return v("article",{class:"message is-warning"},v("div",{class:"message-header"},v("p",null,"Config error"),v("button",{class:"delete","aria-label":"delete"})),v("div",{class:"message-body"},"Missing or invalid config."))}const eR=new H;function e$({iceServers:e}){if(!eR.isValid)return v(eM,null);let t=new eT(eR.webDavCreds),[n,a]=ek(""),[i,r]=ek([]);eC(()=>{let e=async()=>{r(await t.listActiveIds())};e();let n=setInterval(e,5e3);return()=>{clearInterval(n)}},[]);let o=i.map(e=>v("button",{class:"button is-rounded"+(e===n?" is-primary":""),onClick:()=>{a(e)}},e)),s="";return n&&(s=v(eH,{id:n,iceServers:e})),v("div",null,v("div",{class:"buttons"},o),s)}class eq extends eP{id;#D=0;#x=!1;#w;constructor(e,t){super(e),this.#w=t,this.connection.onnegotiationneeded=async e=>{let t=await e.target.createOffer();await e.target.setLocalDescription(t)},this.connection.onconnectionstatechange=async e=>{"failed"===e.target.connectionState?this.#x&&await this.#E():"connected"===e.target.connectionState&&(this.#x=!0)},this.connection.onicecandidate=async e=>{this.id&&await this.#w.setOffer(this.id,e.target.localDescription.sdp)}}start(e){this.id||(this.id=e,this.#S(),this.#A())}async #E(){this.#x=!1,this.#S();let e=await this.connection.createOffer({iceRestart:!0});await this.connection.setLocalDescription(e)}#S(){this.channel=this.connection.createDataChannel("data",{ordered:!0})}#A=async()=>{if(this.id){if("have-local-offer"===this.connection.signalingState){let e=await this.#w.getAnswer(this.id);e&&e.timestamp>this.#D&&(this.#D=e.timestamp,await this.connection.setRemoteDescription({sdp:e.sdp,type:"answer"}))}setTimeout(this.#A,5e3)}}}const eV=new H;let eW=new R;function eB({iceServers:e}){if(!eV.isValid)return v(eM,null);let t=new eT(eV.webDavCreds),n=eV.deviceId,[a,i]=ek(eU.INACTIVE),[r,o]=ek(""),[s,l]=ek(null);return eC(()=>{let a=new eq({iceServers:e},t);return a.addEventListener("message",({type:e,data:t})=>{"json"===e?"text"===t.type?o(t.value):"file"===t.type&&eW.writeFileMetadata(t.value):eW.writeFile(t)}),a.addEventListener("state",e=>{i(e.state)}),a.start(n),l(a),()=>{a.close()}},[n]),v(V,{value:r,onChange:e=>{o(e),s.sendMessage({type:"text",value:e})},onFolderPick:async()=>{let e=await eW.getFile();await eW.sendFile(e,e=>s.sendMessage(e))},disabled:a!==eU.CONNECTED})}function eK({active:e,onTabClick:t}){return v("div",{class:"tabs is-centered is-boxed is-medium"},v("ul",null,v("li",{class:"client"!==e&&"server"!==e?"is-active":""},v("a",{onClick:()=>t("config")},v("span",{class:"icon is-small"},v("i",{class:"fas fa-image","aria-hidden":"true"})),v("span",null,"Config"))),v("li",{class:"server"===e?"is-active":""},v("a",{onClick:()=>t("server")},v("span",{class:"icon is-small"},v("i",{class:"fas fa-music","aria-hidden":"true"})),v("span",null,"Server"))),v("li",{class:"client"===e?"is-active":""},v("a",{onClick:()=>t("client")},v("span",{class:"icon is-small"},v("i",{class:"fas fa-film","aria-hidden":"true"})),v("span",null,"Client")))))}let eG=[];async function eJ(e){if(0===eG.length)try{let t=await fetch(`https://metered.live/api/v1/turn/credentials?apiKey=${e}`);eG=await t.json()}catch(e){eG=[]}return eG}const eX=new H;e=v(function(){let[e,t]=ek(location.hash.replace("#","")),[n,a]=ek();eC(async()=>{a(await eJ(eX.meteredApiKey))},[]),eC(()=>{let e=()=>{t(location.hash.replace("#",""))};return addEventListener("hashchange",e),addEventListener("popstate",e),()=>{removeEventListener("hashchange",e),removeEventListener("popstate",e)}},[]);let i=v(q,null);return"server"===e?i=v(eB,{iceServers:n}):"client"===e&&(i=v(e$,{iceServers:n})),v("div",{class:"container"},v("div",{class:"box"},v(eK,{active:e,onTabClick:e=>{history.pushState(null,null,"#"+e),t(e)}}),i))},null),t=document.body,l.__&&l.__(e,t),i=(a="function"==typeof n)?null:n&&n.__k||t.__k,r=[],o=[],U(t,e=(!a&&n||t).__k=v(k,null,[e]),i||p,p,void 0!==t.ownerSVGElement,!a&&n?[n]:i?null:t.firstChild?s.call(t.childNodes):null,r,!a&&n?n:i?i.__e:t.firstChild,a,o),F(r,e,o);
//# sourceMappingURL=index.30401ed3.js.map