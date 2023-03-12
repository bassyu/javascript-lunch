(() => {
  'use strict';
  var n = {
      402: (n, t, e) => {
        e.d(t, { Z: () => A });
        var a = e(537),
          r = e.n(a),
          i = e(645),
          o = e.n(i)()(r());
        o.push([
          n.id,
          "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nul,\nli {\n  list-style: none;\n}\n\nhtml,\nbody {\n  font-family: sans-serif;\n  font-size: 16px;\n}\n\n:root {\n  --primary-color: #ec4a0a;\n  --lighten-color: #f6a88a;\n  --grey-100: #ffffff;\n  --grey-200: #d0d5dd;\n  --grey-300: #667085;\n  --grey-400: #344054;\n  --grey-500: #000000;\n}\n\n.text-title {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: 600;\n}\n\n.text-subtitle {\n  font-size: 18px;\n  line-height: 28px;\n  font-weight: 600;\n}\n\n.text-body {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n}\n\n.text-caption {\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400;\n}\n\n.gnb {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 64px;\n\n  padding: 0 16px;\n\n  background-color: var(--primary-color);\n}\n\n.gnb__title {\n  color: #fcfcfd;\n}\n\n.gnb__button {\n  height: 40px;\n\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.gnb__button img {\n  display: block;\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n}\n\n.tab-bar {\n  display: flex;\n  justify-content: space-between;\n  height: 50px;\n  margin-top: 20px;\n  padding: 0 16px;\n}\n\n.tab-bar input[type='radio'] {\n  display: none;\n}\n\n.tab-bar .tab {\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  border-bottom: 2px solid #e9eaed;\n\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: #667085;\n}\n\n.tab-bar input[type='radio']:checked + .tab {\n  border-bottom: 2px solid #ec4a0a;\n  color: #ec4a0a;\n}\n\n.restaurant-filter-container {\n  display: flex;\n  justify-content: space-between;\n\n  padding: 0 16px;\n  margin-top: 24px;\n}\n\n.restaurant-filter-container--close {\n  display: none;\n}\n\n.restaurant-filter-container select {\n  height: 44px;\n  min-width: 125px;\n\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  background: transparent;\n\n  font-size: 16px;\n}\n\n.restaurant-filter {\n  padding: 8px;\n}\n\n.restaurant-list-container {\n  display: flex;\n  flex-direction: column;\n\n  padding: 0 16px;\n  margin: 16px 0;\n}\n\n.restaurant-list-container--close {\n  display: none;\n}\n\n.restaurant {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n\n  padding: 16px 8px;\n  border-bottom: 1px solid #e9eaed;\n}\n\n.restaurant .restaurant__info {\n  width: 100%;\n}\n\n.favorite-icon {\n  font-size: 30px;\n  color: #f6a88a;\n}\n\n.favorite-icon.favorite {\n  color: #ec4a0a;\n}\n\n.restaurant__category {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 64px;\n  height: 64px;\n  min-width: 64px;\n  min-height: 64px;\n\n  margin-right: 16px;\n\n  border-radius: 50%;\n  background: var(--lighten-color);\n}\n\n.category-icon {\n  width: 36px;\n  height: 36px;\n}\n\n.restaurant__info {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n.restaurant__name {\n  margin: 0;\n}\n\n.restaurant__distance {\n  color: var(--primary-color);\n}\n\n.restaurant__description {\n  display: -webkit-box;\n\n  padding-top: 8px;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.modal {\n  display: none;\n}\n\n.modal--open {\n  display: block;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  background: rgba(0, 0, 0, 0.35);\n}\n\n.modal-container {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n\n  padding: 32px 16px;\n\n  border-radius: 8px 8px 0px 0px;\n  background: var(--grey-100);\n}\n\n.modal-title {\n  margin-bottom: 36px;\n}\n\n.form-item {\n  display: flex;\n  flex-direction: column;\n\n  margin-bottom: 36px;\n}\n\n.form-item label {\n  color: var(--grey-400);\n  font-size: 14px;\n}\n\n.form-item--required label::after {\n  padding-left: 4px;\n\n  color: var(--primary-color);\n  content: '*';\n}\n\n.form-item .help-text {\n  color: var(--grey-300);\n}\n\n.form-item input,\n.form-item textarea,\n.form-item select {\n  padding: 8px;\n  margin: 6px 0;\n\n  border: 1px solid var(--grey-200);\n  border-radius: 8px;\n\n  font-size: 16px;\n}\n\n.form-item textarea {\n  resize: none;\n}\n\n.form-item select {\n  height: 44px;\n\n  padding: 8px;\n\n  border: 1px solid var(--grey-200);\n  border-radius: 8px;\n\n  color: var(--grey-300);\n}\n\n.detail {\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  height: 608px;\n}\n\n.detail .favorite-icon {\n  position: absolute;\n  right: 8px;\n}\n\n.detail h2 {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.detail .restaurant__take-minute {\n  color: #ec4a0a;\n}\n\n.detail textarea {\n  resize: none;\n\n  border: none;\n  height: 240px;\n\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 150%;\n}\n\n.detail .link-area a {\n  height: 24px;\n  color: #000000;\n}\n\ninput[name='name'],\ninput[name='link'] {\n  height: 44px;\n}\n\n.button-container {\n  display: flex;\n}\n\n.button {\n  width: 100%;\n  height: 44px;\n\n  margin-right: 16px;\n\n  border: none;\n  border-radius: 8px;\n\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.button:last-child {\n  margin-right: 0;\n}\n\n.button--secondary {\n  border: 1px solid var(--grey-300);\n  background: transparent;\n\n  color: var(--grey-300);\n}\n\n.button--primary {\n  background: var(--primary-color);\n\n  color: var(--grey-100);\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/css/style.css'],
            names: [],
            mappings:
              'AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,wBAAwB;EACxB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;;EAEZ,eAAe;;EAEf,sCAAsC;AACxC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;;EAEZ,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;;EAEvB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,gCAAgC;;EAEhC,eAAe;EACf,gBAAgB;EAChB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,gCAAgC;EAChC,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;;EAE9B,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,gBAAgB;;EAEhB,yBAAyB;EACzB,kBAAkB;EAClB,uBAAuB;;EAEvB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;;EAEvB,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;;EAEhB,kBAAkB;;EAElB,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,oBAAoB;;EAEpB,gBAAgB;;EAEhB,gBAAgB;EAChB,uBAAuB;EACvB,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;;EAEP,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,SAAS;EACT,WAAW;;EAEX,kBAAkB;;EAElB,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,iBAAiB;;EAEjB,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,YAAY;EACZ,aAAa;;EAEb,iCAAiC;EACjC,kBAAkB;;EAElB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;;EAEZ,YAAY;;EAEZ,iCAAiC;EACjC,kBAAkB;;EAElB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;;EAElB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;;EAE9B,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;;EAEZ,YAAY;EACZ,aAAa;;EAEb,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,kBAAkB;;EAElB,YAAY;EACZ,kBAAkB;;EAElB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,uBAAuB;;EAEvB,sBAAsB;AACxB;;AAEA;EACE,gCAAgC;;EAEhC,sBAAsB;AACxB',
            sourcesContent: [
              "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nul,\nli {\n  list-style: none;\n}\n\nhtml,\nbody {\n  font-family: sans-serif;\n  font-size: 16px;\n}\n\n:root {\n  --primary-color: #ec4a0a;\n  --lighten-color: #f6a88a;\n  --grey-100: #ffffff;\n  --grey-200: #d0d5dd;\n  --grey-300: #667085;\n  --grey-400: #344054;\n  --grey-500: #000000;\n}\n\n.text-title {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: 600;\n}\n\n.text-subtitle {\n  font-size: 18px;\n  line-height: 28px;\n  font-weight: 600;\n}\n\n.text-body {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n}\n\n.text-caption {\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400;\n}\n\n.gnb {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 64px;\n\n  padding: 0 16px;\n\n  background-color: var(--primary-color);\n}\n\n.gnb__title {\n  color: #fcfcfd;\n}\n\n.gnb__button {\n  height: 40px;\n\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.gnb__button img {\n  display: block;\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n}\n\n.tab-bar {\n  display: flex;\n  justify-content: space-between;\n  height: 50px;\n  margin-top: 20px;\n  padding: 0 16px;\n}\n\n.tab-bar input[type='radio'] {\n  display: none;\n}\n\n.tab-bar .tab {\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  border-bottom: 2px solid #e9eaed;\n\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: #667085;\n}\n\n.tab-bar input[type='radio']:checked + .tab {\n  border-bottom: 2px solid #ec4a0a;\n  color: #ec4a0a;\n}\n\n.restaurant-filter-container {\n  display: flex;\n  justify-content: space-between;\n\n  padding: 0 16px;\n  margin-top: 24px;\n}\n\n.restaurant-filter-container--close {\n  display: none;\n}\n\n.restaurant-filter-container select {\n  height: 44px;\n  min-width: 125px;\n\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  background: transparent;\n\n  font-size: 16px;\n}\n\n.restaurant-filter {\n  padding: 8px;\n}\n\n.restaurant-list-container {\n  display: flex;\n  flex-direction: column;\n\n  padding: 0 16px;\n  margin: 16px 0;\n}\n\n.restaurant-list-container--close {\n  display: none;\n}\n\n.restaurant {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n\n  padding: 16px 8px;\n  border-bottom: 1px solid #e9eaed;\n}\n\n.restaurant .restaurant__info {\n  width: 100%;\n}\n\n.favorite-icon {\n  font-size: 30px;\n  color: #f6a88a;\n}\n\n.favorite-icon.favorite {\n  color: #ec4a0a;\n}\n\n.restaurant__category {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 64px;\n  height: 64px;\n  min-width: 64px;\n  min-height: 64px;\n\n  margin-right: 16px;\n\n  border-radius: 50%;\n  background: var(--lighten-color);\n}\n\n.category-icon {\n  width: 36px;\n  height: 36px;\n}\n\n.restaurant__info {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n.restaurant__name {\n  margin: 0;\n}\n\n.restaurant__distance {\n  color: var(--primary-color);\n}\n\n.restaurant__description {\n  display: -webkit-box;\n\n  padding-top: 8px;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.modal {\n  display: none;\n}\n\n.modal--open {\n  display: block;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  background: rgba(0, 0, 0, 0.35);\n}\n\n.modal-container {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n\n  padding: 32px 16px;\n\n  border-radius: 8px 8px 0px 0px;\n  background: var(--grey-100);\n}\n\n.modal-title {\n  margin-bottom: 36px;\n}\n\n.form-item {\n  display: flex;\n  flex-direction: column;\n\n  margin-bottom: 36px;\n}\n\n.form-item label {\n  color: var(--grey-400);\n  font-size: 14px;\n}\n\n.form-item--required label::after {\n  padding-left: 4px;\n\n  color: var(--primary-color);\n  content: '*';\n}\n\n.form-item .help-text {\n  color: var(--grey-300);\n}\n\n.form-item input,\n.form-item textarea,\n.form-item select {\n  padding: 8px;\n  margin: 6px 0;\n\n  border: 1px solid var(--grey-200);\n  border-radius: 8px;\n\n  font-size: 16px;\n}\n\n.form-item textarea {\n  resize: none;\n}\n\n.form-item select {\n  height: 44px;\n\n  padding: 8px;\n\n  border: 1px solid var(--grey-200);\n  border-radius: 8px;\n\n  color: var(--grey-300);\n}\n\n.detail {\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  height: 608px;\n}\n\n.detail .favorite-icon {\n  position: absolute;\n  right: 8px;\n}\n\n.detail h2 {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.detail .restaurant__take-minute {\n  color: #ec4a0a;\n}\n\n.detail textarea {\n  resize: none;\n\n  border: none;\n  height: 240px;\n\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 150%;\n}\n\n.detail .link-area a {\n  height: 24px;\n  color: #000000;\n}\n\ninput[name='name'],\ninput[name='link'] {\n  height: 44px;\n}\n\n.button-container {\n  display: flex;\n}\n\n.button {\n  width: 100%;\n  height: 44px;\n\n  margin-right: 16px;\n\n  border: none;\n  border-radius: 8px;\n\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.button:last-child {\n  margin-right: 0;\n}\n\n.button--secondary {\n  border: 1px solid var(--grey-300);\n  background: transparent;\n\n  color: var(--grey-300);\n}\n\n.button--primary {\n  background: var(--primary-color);\n\n  color: var(--grey-100);\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        const A = o;
      },
      645: (n) => {
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = '',
                  a = void 0 !== t[5];
                return (
                  t[4] && (e += '@supports ('.concat(t[4], ') {')),
                  t[2] && (e += '@media '.concat(t[2], ' {')),
                  a && (e += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
                  (e += n(t)),
                  a && (e += '}'),
                  t[2] && (e += '}'),
                  t[4] && (e += '}'),
                  e
                );
              }).join('');
            }),
            (t.i = function (n, e, a, r, i) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var o = {};
              if (a)
                for (var A = 0; A < this.length; A++) {
                  var s = this[A][0];
                  null != s && (o[s] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var c = [].concat(n[l]);
                (a && o[c[0]]) ||
                  (void 0 !== i &&
                    (void 0 === c[5] ||
                      (c[1] = '@layer'
                        .concat(c[5].length > 0 ? ' '.concat(c[5]) : '', ' {')
                        .concat(c[1], '}')),
                    (c[5] = i)),
                  e &&
                    (c[2]
                      ? ((c[1] = '@media '.concat(c[2], ' {').concat(c[1], '}')), (c[2] = e))
                      : (c[2] = e)),
                  r &&
                    (c[4]
                      ? ((c[1] = '@supports ('.concat(c[4], ') {').concat(c[1], '}')), (c[4] = r))
                      : (c[4] = ''.concat(r))),
                  t.push(c));
              }
            }),
            t
          );
        };
      },
      537: (n) => {
        n.exports = function (n) {
          var t = n[1],
            e = n[3];
          if (!e) return t;
          if ('function' == typeof btoa) {
            var a = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
              r = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(a),
              i = '/*# '.concat(r, ' */');
            return [t].concat([i]).join('\n');
          }
          return [t].join('\n');
        };
      },
      379: (n) => {
        var t = [];
        function e(n) {
          for (var e = -1, a = 0; a < t.length; a++)
            if (t[a].identifier === n) {
              e = a;
              break;
            }
          return e;
        }
        function a(n, a) {
          for (var i = {}, o = [], A = 0; A < n.length; A++) {
            var s = n[A],
              l = a.base ? s[0] + a.base : s[0],
              c = i[l] || 0,
              d = ''.concat(l, ' ').concat(c);
            i[l] = c + 1;
            var p = e(d),
              u = { css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5] };
            if (-1 !== p) t[p].references++, t[p].updater(u);
            else {
              var f = r(u, a);
              (a.byIndex = A), t.splice(A, 0, { identifier: d, updater: f, references: 1 });
            }
            o.push(d);
          }
          return o;
        }
        function r(n, t) {
          var e = t.domAPI(t);
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap &&
                  t.supports === n.supports &&
                  t.layer === n.layer
                )
                  return;
                e.update((n = t));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, r) {
          var i = a((n = n || []), (r = r || {}));
          return function (n) {
            n = n || [];
            for (var o = 0; o < i.length; o++) {
              var A = e(i[o]);
              t[A].references--;
            }
            for (var s = a(n, r), l = 0; l < i.length; l++) {
              var c = e(i[l]);
              0 === t[c].references && (t[c].updater(), t.splice(c, 1));
            }
            i = s;
          };
        };
      },
      569: (n) => {
        var t = {};
        n.exports = function (n, e) {
          var a = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n);
              if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              t[n] = e;
            }
            return t[n];
          })(n);
          if (!a)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          a.appendChild(e);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var t = document.createElement('style');
          return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
        };
      },
      565: (n, t, e) => {
        n.exports = function (n) {
          var t = e.nc;
          t && n.setAttribute('nonce', t);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var t = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, t, e) {
                var a = '';
                e.supports && (a += '@supports ('.concat(e.supports, ') {')),
                  e.media && (a += '@media '.concat(e.media, ' {'));
                var r = void 0 !== e.layer;
                r && (a += '@layer'.concat(e.layer.length > 0 ? ' '.concat(e.layer) : '', ' {')),
                  (a += e.css),
                  r && (a += '}'),
                  e.media && (a += '}'),
                  e.supports && (a += '}');
                var i = e.sourceMap;
                i &&
                  'undefined' != typeof btoa &&
                  (a += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                    ' */'
                  )),
                  t.styleTagTransform(a, n, t.options);
              })(t, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(t);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    t = {};
  function e(a) {
    var r = t[a];
    if (void 0 !== r) return r.exports;
    var i = (t[a] = { id: a, exports: {} });
    return n[a](i, i.exports, e), i.exports;
  }
  (e.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (n, t) => {
      for (var a in t)
        e.o(t, a) && !e.o(n, a) && Object.defineProperty(n, a, { enumerable: !0, get: t[a] });
    }),
    (e.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (n) {
        if ('object' == typeof window) return window;
      }
    })()),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (() => {
      var n;
      e.g.importScripts && (n = e.g.location + '');
      var t = e.g.document;
      if (!n && t && (t.currentScript && (n = t.currentScript.src), !n)) {
        var a = t.getElementsByTagName('script');
        a.length && (n = a[a.length - 1].src);
      }
      if (!n) throw new Error('Automatic publicPath is not supported in this browser');
      (n = n
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (e.p = n);
    })(),
    (e.nc = void 0),
    (() => {
      var n = e(379),
        t = e.n(n),
        a = e(795),
        r = e.n(a),
        i = e(569),
        o = e.n(i),
        A = e(565),
        s = e.n(A),
        l = e(216),
        c = e.n(l),
        d = e(589),
        p = e.n(d),
        u = e(402),
        f = {};
      (f.styleTagTransform = p()),
        (f.setAttributes = s()),
        (f.insert = o().bind(null, 'head')),
        (f.domAPI = r()),
        (f.insertStyleElement = c()),
        t()(u.Z, f),
        u.Z && u.Z.locals && u.Z.locals,
        e.p,
        e.p,
        e.p,
        e.p,
        e.p,
        e.p,
        e.p;
      const g = {
          한식: './category-korean.png',
          중식: './category-chinese.png',
          일식: './category-japanese.png',
          양식: './category-western.png',
          아시안: './category-asian.png',
          기타: './category-etc.png',
        },
        E = 'name';
      var h,
        m = function (n, t, e, a) {
          if ('a' === e && !a) throw new TypeError('Private accessor was defined without a getter');
          if ('function' == typeof t ? n !== t || !a : !t.has(n))
            throw new TypeError(
              'Cannot read private member from an object whose class did not declare it'
            );
          return 'm' === e ? a : 'a' === e ? a.call(n) : a ? a.value : t.get(n);
        };
      h = new WeakMap();
      const b = ({ id: n, content: t }) =>
          `\n    <div id="${n}" class="modal">\n      <div class="modal-backdrop"></div>\n      <div class="modal-container">\n        ${t}\n      </div>\n    </div>\n  `,
        x = ({ id: n, favorite: t }) =>
          `\n    <div data-id="${n}" class="favorite-icon ${t ? 'favorite' : ''}">\n      ${
            t ? '★' : '☆'
          }\n    </div>\n  `,
        B = ({ restaurants: n }) =>
          `\n    <ul class="restaurant-list">\n      ${n
            .map((n) =>
              (({ restaurant: n }) => {
                const {
                  id: t,
                  category: e,
                  name: a,
                  takeMinute: r,
                  description: i,
                  favorite: o,
                } = n;
                return `\n    <li data-id="${t}" class="restaurant">\n      <div class="restaurant__category">\n        <img src="${
                  g[e]
                }" alt="${e}" class="category-icon">\n      </div>\n      <div class="restaurant__info">\n        <h3 class="restaurant__name text-subtitle">${a}</h3>\n        <span class="restaurant__distance text-body">캠퍼스부터 ${r}분 내</span>\n        <p class="restaurant__description text-body">${i}</p>\n      </div>\n      ${x(
                  { id: t, favorite: o }
                )}\n    </li>\n  `;
              })({ restaurant: n })
            )
            .join('')}\n    </ul>\n  `,
        C = ({ id: n, name: t, required: e, options: a }) =>
          `\n    <select id="${n}" name="${t}" class="restaurant-filter" ${
            e ? 'required' : ''
          }>\n      ${a
            .map(({ value: n, content: t }) => `<option value="${n}">${t}</option>`)
            .join('')}\n    </select>\n  `,
        v = ({ id: n, type: t, style: e, content: a }) =>
          `\n    <button id="${n}" type="${t}" class="button button--${e} text-caption">${a}</button>\n  `,
        y = () =>
          `\n    <form>\n      <h2 class="modal-title text-title">새로운 음식점</h2>\n      <div class="form-item form-item--required">\n        <label for="category text-caption">카테고리</label>\n        ${C(
            {
              id: 'category',
              name: 'category',
              required: !0,
              options: [
                { value: '', content: '선택해 주세요' },
                { value: '한식', content: '한식' },
                { value: '중식', content: '중식' },
                { value: '일식', content: '일식' },
                { value: '양식', content: '양식' },
                { value: '아시안', content: '아시안' },
                { value: '기타', content: '기타' },
              ],
            }
          )}\n      </div>\n      <div class="form-item form-item--required">\n        <label for="name text-caption">이름</label>\n        <input type="text" name="name" id="name" required>\n      </div>\n      <div class="form-item form-item--required">\n        <label for="distance text-caption">거리(도보 이동 시간) </label>\n        ${C(
            {
              id: 'takeMinute',
              name: 'takeMinute',
              required: !0,
              options: [
                { value: '', content: '선택해 주세요' },
                { value: '5', content: '5분 내' },
                { value: '10', content: '10분 내' },
                { value: '15', content: '15분 내' },
                { value: '20', content: '20분 내' },
                { value: '30', content: '30분 내' },
              ],
            }
          )}\n      </div>\n      <div class="form-item">\n        <label for="description text-caption">설명</label>\n        <textarea name="description" id="description" cols="30" rows="5"></textarea>\n        <span class="help-text text-caption">메뉴 등 추가 정보를 입력해 주세요.</span>\n      </div>\n      <div class="form-item">\n        <label for="link text-caption">참고 링크</label>\n        <input type="text" name="link" id="link">\n        <span class="help-text text-caption">매장 정보를 확인할 수 있는 링크를 입력해 주세요.</span>\n      </div>\n      <div class="button-container">\n        ${v(
            { id: 'cancel', type: 'button', style: 'secondary', content: '취소하기' }
          )}\n        ${v({
            id: 'submit',
            type: 'submit',
            style: 'primary',
            content: '추가하기',
          })}\n      </div>\n    </form>\n  `,
        w = (n) => document.querySelector(n);
      var k,
        _,
        j = function (n, t, e, a, r) {
          if ('m' === a) throw new TypeError('Private method is not writable');
          if ('a' === a && !r) throw new TypeError('Private accessor was defined without a setter');
          if ('function' == typeof t ? n !== t || !r : !t.has(n))
            throw new TypeError(
              'Cannot write private member to an object whose class did not declare it'
            );
          return 'a' === a ? r.call(n, e) : r ? (r.value = e) : t.set(n, e), e;
        },
        $ = function (n, t, e, a) {
          if ('a' === e && !a) throw new TypeError('Private accessor was defined without a getter');
          if ('function' == typeof t ? n !== t || !a : !t.has(n))
            throw new TypeError(
              'Cannot read private member from an object whose class did not declare it'
            );
          return 'm' === e ? a : 'a' === e ? a.call(n) : a ? a.value : t.get(n);
        };
      (k = new WeakMap()), (_ = new WeakMap());
      var M,
        Y,
        T,
        z = function (n, t, e, a, r) {
          if ('m' === a) throw new TypeError('Private method is not writable');
          if ('a' === a && !r) throw new TypeError('Private accessor was defined without a setter');
          if ('function' == typeof t ? n !== t || !r : !t.has(n))
            throw new TypeError(
              'Cannot write private member to an object whose class did not declare it'
            );
          return 'a' === a ? r.call(n, e) : r ? (r.value = e) : t.set(n, e), e;
        },
        S = function (n, t, e, a) {
          if ('a' === e && !a) throw new TypeError('Private accessor was defined without a getter');
          if ('function' == typeof t ? n !== t || !a : !t.has(n))
            throw new TypeError(
              'Cannot read private member from an object whose class did not declare it'
            );
          return 'm' === e ? a : 'a' === e ? a.call(n) : a ? a.value : t.get(n);
        };
      (M = new WeakMap()), (Y = new WeakMap()), (T = new WeakMap());
      const F = new (class {
        constructor(n) {
          M.set(this, void 0),
            Y.set(this, void 0),
            T.set(this, void 0),
            (this.handleListItem = (n) => {
              n.target.closest('.favorite-icon')
                ? (this.updateFavorite(n), this.initModel(), this.renderList())
                : (this.updateDetailModal(n), this.toggleDetailModal());
            }),
            (this.initModel = () => {
              z(
                this,
                T,
                new (class {
                  constructor(n) {
                    h.set(this, void 0),
                      (function (n, t, e, a, r) {
                        if ('m' === a) throw new TypeError('Private method is not writable');
                        if ('a' === a && !r)
                          throw new TypeError('Private accessor was defined without a setter');
                        if ('function' == typeof t ? n !== t || !r : !t.has(n))
                          throw new TypeError(
                            'Cannot write private member to an object whose class did not declare it'
                          );
                        'a' === a ? r.call(n, e) : r ? (r.value = e) : t.set(n, e);
                      })(this, h, n, 'f');
                  }
                  getAll() {
                    return m(this, h, 'f');
                  }
                  findRestaurant(n) {
                    return m(this, h, 'f').find((t) => t.id === n);
                  }
                  getFiltered(n, t) {
                    return (
                      this.sort(t), m(this, h, 'f').filter((t) => '전체' === n || t.category === n)
                    );
                  }
                  getFavorite() {
                    return this.sort(E), m(this, h, 'f').filter((n) => !0 === n.favorite);
                  }
                  sort(n) {
                    const t = (t) =>
                      'name' === n ? t.name : 'takeMinute' === n ? Number(t.takeMinute) : 0;
                    m(this, h, 'f').sort((n, e) => (t(n) > t(e) ? 1 : t(n) < t(e) ? -1 : 0));
                  }
                })(S(this, Y, 'f').getValue()),
                'f'
              );
            }),
            (this.toggleFormModal = () => {
              w('#form-modal').classList.toggle('modal--open');
            }),
            (this.toggleDetailModal = () => {
              w('#detail-modal').classList.toggle('modal--open');
            }),
            (this.submitForm = (n) => {
              n.preventDefault();
              const t = new FormData(n.target),
                e = {
                  id: String(Date.now()),
                  category: t.get('category'),
                  name: t.get('name'),
                  takeMinute: t.get('takeMinute'),
                  favorite: !1,
                  description: t.get('description'),
                  link: t.get('link'),
                };
              S(this, Y, 'f').setValue([...S(this, Y, 'f').getValue(), e]);
            }),
            (this.initForm = () => {
              w('#form-modal .modal-container').innerHTML = y();
            }),
            (this.renderList = () => {
              const n = w('#category-filter'),
                t = w('#sorting-filter'),
                e = n.options[n.selectedIndex].value,
                a = t.options[t.selectedIndex].value,
                r =
                  'favorite' === w('input[name=listType]:checked').id
                    ? S(this, T, 'f').getFavorite()
                    : S(this, T, 'f').getFiltered(e, a);
              w('.restaurant-list').outerHTML = B({ restaurants: r });
            }),
            (this.toggleFilterContainer = () => {
              w('.restaurant-filter-container').classList.toggle(
                'restaurant-filter-container--close'
              );
            }),
            (this.updateFavorite = (n) => {
              const t = n.target.dataset.id,
                e = S(this, T, 'f')
                  .getAll()
                  .map((n) => (n.id === t ? { ...n, favorite: !n.favorite } : n));
              S(this, Y, 'f').setValue(e);
            }),
            (this.updateDetailModal = (n) => {
              const t = n.target.closest('.restaurant') || n.target.closest('.detail'),
                e = S(this, T, 'f').findRestaurant(t.dataset.id);
              w('#detail-modal .modal-container').innerHTML = (({ restaurant: n }) => {
                const {
                  id: t,
                  category: e,
                  name: a,
                  takeMinute: r,
                  description: i,
                  link: o,
                  favorite: A,
                } = n;
                return `\n    <div data-id="${t}" class="detail">\n      ${x({
                  id: t,
                  favorite: A,
                })}\n      <div class="restaurant__category">\n        <img src="${
                  g[e] ?? ''
                }" alt="${e}" class="category-icon">\n      </div>\n      <h2 class="restaurant__name text-subtitle">${a}</h2>\n      <p class="restaurant__take-minute text-body">캠퍼스부터 ${r}분 내</p>\n      <textarea readonly>${i}</textarea>\n      <div class="link-area">\n        <a href="${o}">${o}</a>\n      </div>\n      <div class="button-container">\n        ${v(
                  { id: 'remove', type: 'button', style: 'secondary', content: '삭제하기' }
                )}\n        ${v({
                  id: 'close',
                  type: 'button',
                  style: 'primary',
                  content: '닫기',
                })}\n      </div>\n    </div>\n  `;
              })({ restaurant: e });
            }),
            (this.removeRestaurant = (n) => {
              const t = n.target.closest('.detail').dataset.id,
                e = S(this, T, 'f')
                  .getAll()
                  .filter((n) => n.id !== t);
              S(this, Y, 'f').setValue(e);
            }),
            z(this, M, n, 'f'),
            z(
              this,
              Y,
              new (class {
                constructor(n, t) {
                  k.set(this, void 0), _.set(this, void 0), j(this, k, n, 'f'), j(this, _, t, 'f');
                }
                getValue() {
                  const n = localStorage.getItem($(this, k, 'f'));
                  return n ? JSON.parse(n) : $(this, _, 'f');
                }
                setValue(n) {
                  localStorage.setItem($(this, k, 'f'), JSON.stringify(n));
                }
              })('restaurants', []),
              'f'
            ),
            this.initModel();
        }
        initRender() {
          const n = S(this, T, 'f').getFiltered('전체', E);
          S(
            this,
            M,
            'f'
          ).innerHTML = `\n      \n    <header class="gnb">\n      <h1 class="gnb__title text-title">점심 뭐 먹지</h1>\n      <button type="button" class="gnb__button" aria-label="음식점 추가">\n        <img src="./add-button.png" alt="음식점 추가">\n      </button>\n    </header>\n  \n      <main>\n        ${(({
            checkedType: n,
          }) =>
            `\n    <div class="tab-bar">\n      ${[
              { id: 'all', label: '모든 음식점' },
              { id: 'favorite', label: '자주 가는 음식점' },
            ]
              .map(({ id: t, label: e }) =>
                (({ id: n, label: t, checked: e }) =>
                  `\n    <input id=${n} type="radio" name="listType" ${
                    e ? 'checked' : ''
                  }/>\n    <label class="tab" for="${n}">${t}</label>\n  `)({
                  id: t,
                  label: e,
                  checked: t === n,
                })
              )
              .join('')}\n    </div>\n  `)({
            checkedType: 'all',
          })}\n        \n    <section class="restaurant-filter-container">\n      ${C({
            id: 'category-filter',
            name: 'category',
            options: [
              { value: '전체', content: '전체' },
              { value: '한식', content: '한식' },
              { value: '중식', content: '중식' },
              { value: '일식', content: '일식' },
              { value: '양식', content: '양식' },
              { value: '아시안', content: '아시안' },
              { value: '기타', content: '기타' },
            ],
          })}\n      ${C({
            id: 'sorting-filter',
            name: 'sorting',
            options: [
              { value: 'name', content: '이름순' },
              { value: 'takeMinute', content: '거리순' },
            ],
          })}\n    </section>\n  \n        <section class="restaurant-list-container">\n          ${B(
            { restaurants: n }
          )}\n        </section>\n        ${b({ id: 'form-modal', content: y() })}\n        ${b({
            id: 'detail-modal',
            content: '',
          })}\n      </main>\n    `;
        }
        addEvents() {
          [
            { selectors: 'header button', event: 'click', actions: [this.toggleFormModal] },
            { selectors: '#form-modal #cancel', event: 'click', actions: [this.toggleFormModal] },
            {
              selectors: '#form-modal form',
              event: 'submit',
              actions: [
                this.submitForm,
                this.initForm,
                this.toggleFormModal,
                this.initModel,
                this.renderList,
              ],
            },
            { selectors: '#category-filter', event: 'change', actions: [this.renderList] },
            { selectors: '#sorting-filter', event: 'change', actions: [this.renderList] },
            {
              selectors: '.tab-bar',
              event: 'change',
              actions: [this.toggleFilterContainer, this.renderList],
            },
            { selectors: '.restaurant-list', event: 'click', actions: [this.handleListItem] },
            {
              selectors: '#detail-modal .favorite-icon',
              event: 'click',
              actions: [
                this.updateFavorite,
                this.initModel,
                this.updateDetailModal,
                this.renderList,
              ],
            },
            {
              selectors: '#detail-modal #close',
              event: 'click',
              actions: [this.toggleDetailModal],
            },
            {
              selectors: '#detail-modal #remove',
              event: 'click',
              actions: [
                this.removeRestaurant,
                this.initModel,
                this.renderList,
                this.toggleDetailModal,
              ],
            },
          ].forEach((n) => {
            this.addEvent(n);
          });
        }
        addEvent({ selectors: n, event: t, actions: e }) {
          S(this, M, 'f').addEventListener(t, (t) => {
            const a = w(n);
            null !== a &&
              a.contains(t.target) &&
              e.forEach((n) => {
                n(t);
              });
          });
        }
      })(document.querySelector('#root'));
      F.initRender(), F.addEvents();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBdUJqTixLQUFNcUosRUFBVyxLQUFLZ0UsaUJBQWlCTCxHQUFRNUksSUFDbEUsTUFBTWtKLEVBQVV0RSxFQUFFQyxHQUNGLE9BQVpxRSxHQUFxQkEsRUFBUUMsU0FBU25KLEVBQUVSLFNBRTVDcUosRUFBUUMsU0FBU00sSUFDYkEsRUFBT3BKLEVBQUUsR0FDWCxHQUVWLEdDbExnQk4sU0FBU0MsY0FBYyxVQUMzQ3lGLEVBQUltRCxhQUNKbkQsRUFBSXVELFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad29vd2Fjb3Vyc2UvamF2YXNjcmlwdC1sdW5jaC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL0B3b293YWNvdXJzZS9qYXZhc2NyaXB0LWx1bmNoLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Ad29vd2Fjb3Vyc2UvamF2YXNjcmlwdC1sdW5jaC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0B3b293YWNvdXJzZS9qYXZhc2NyaXB0LWx1bmNoLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0B3b293YWNvdXJzZS9qYXZhc2NyaXB0LWx1bmNoLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9Ad29vd2Fjb3Vyc2UvamF2YXNjcmlwdC1sdW5jaC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9Ad29vd2Fjb3Vyc2UvamF2YXNjcmlwdC1sdW5jaC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Ad29vd2Fjb3Vyc2UvamF2YXNjcmlwdC1sdW5jaC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0B3b293YWNvdXJzZS9qYXZhc2NyaXB0LWx1bmNoLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0B3b293YWNvdXJzZS9qYXZhc2NyaXB0LWx1bmNoL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ad29vd2Fjb3Vyc2UvamF2YXNjcmlwdC1sdW5jaC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Ad29vd2Fjb3Vyc2UvamF2YXNjcmlwdC1sdW5jaC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL0B3b293YWNvdXJzZS9qYXZhc2NyaXB0LWx1bmNoLy4vaW1hZ2UvYWRkLWJ1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvLi9pbWFnZS9jYXRlZ29yeS1hc2lhbi5wbmciLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvLi9pbWFnZS9jYXRlZ29yeS1jaGluZXNlLnBuZyIsIndlYnBhY2s6Ly9Ad29vd2Fjb3Vyc2UvamF2YXNjcmlwdC1sdW5jaC8uL2ltYWdlL2NhdGVnb3J5LWV0Yy5wbmciLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvLi9pbWFnZS9jYXRlZ29yeS13ZXN0ZXJuLnBuZyIsIndlYnBhY2s6Ly9Ad29vd2Fjb3Vyc2UvamF2YXNjcmlwdC1sdW5jaC8uL2ltYWdlL2NhdGVnb3J5LWtvcmVhbi5wbmciLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvLi9pbWFnZS9jYXRlZ29yeS1qYXBhbmVzZS5wbmciLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL0B3b293YWNvdXJzZS9qYXZhc2NyaXB0LWx1bmNoLy4vc3JjL2RvbWFpbi9tb2RlbHMvUmVzdGF1cmFudHMudHMiLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvLi9zcmMvY29tcG9uZW50L2JvdHRvbVNoZWV0L21vZGFsLmpzIiwid2VicGFjazovL0B3b293YWNvdXJzZS9qYXZhc2NyaXB0LWx1bmNoLy4vc3JjL2NvbXBvbmVudC9jb21tb24vZmF2b3JpdGVJY29uLmpzIiwid2VicGFjazovL0B3b293YWNvdXJzZS9qYXZhc2NyaXB0LWx1bmNoLy4vc3JjL2NvbXBvbmVudC9yZXN0YXVyYW50TGlzdFBhZ2UvcmVzdGF1cmFudExpc3QuanMiLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvLi9zcmMvY29tcG9uZW50L3Jlc3RhdXJhbnRMaXN0UGFnZS9yZXN0YXVyYW50TGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvLi9zcmMvY29tcG9uZW50L2NvbW1vbi9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvLi9zcmMvY29tcG9uZW50L2NvbW1vbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvLi9zcmMvY29tcG9uZW50L2JvdHRvbVNoZWV0L2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvLi9zcmMvdXRpbHMvZG9tLnRzIiwid2VicGFjazovL0B3b293YWNvdXJzZS9qYXZhc2NyaXB0LWx1bmNoLy4vc3JjL3V0aWxzL0N1c3RvbVN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL0B3b293YWNvdXJzZS9qYXZhc2NyaXB0LWx1bmNoLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0B3b293YWNvdXJzZS9qYXZhc2NyaXB0LWx1bmNoLy4vc3JjL2NvbXBvbmVudC9ib3R0b21TaGVldC9kZXRhaWwuanMiLCJ3ZWJwYWNrOi8vQHdvb3dhY291cnNlL2phdmFzY3JpcHQtbHVuY2gvLi9zcmMvY29tcG9uZW50L3RhYkJhci5qcyIsIndlYnBhY2s6Ly9Ad29vd2Fjb3Vyc2UvamF2YXNjcmlwdC1sdW5jaC8uL3NyYy9jb21wb25lbnQvdGFiLmpzIiwid2VicGFjazovL0B3b293YWNvdXJzZS9qYXZhc2NyaXB0LWx1bmNoLy4vc3JjL2NvbXBvbmVudC9yZXN0YXVyYW50RmlsdGVyQ29udGFpbmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICNlYzRhMGE7XFxuICAtLWxpZ2h0ZW4tY29sb3I6ICNmNmE4OGE7XFxuICAtLWdyZXktMTAwOiAjZmZmZmZmO1xcbiAgLS1ncmV5LTIwMDogI2QwZDVkZDtcXG4gIC0tZ3JleS0zMDA6ICM2NjcwODU7XFxuICAtLWdyZXktNDAwOiAjMzQ0MDU0O1xcbiAgLS1ncmV5LTUwMDogIzAwMDAwMDtcXG59XFxuXFxuLnRleHQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGV4dC1zdWJ0aXRsZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50ZXh0LWJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4udGV4dC1jYXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmduYiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNjRweDtcXG5cXG4gIHBhZGRpbmc6IDAgMTZweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uZ25iX190aXRsZSB7XFxuICBjb2xvcjogI2ZjZmNmZDtcXG59XFxuXFxuLmduYl9fYnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcblxcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ25iX19idXR0b24gaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4udGFiLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG59XFxuXFxuLnRhYi1iYXIgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFiLWJhciAudGFiIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTllYWVkO1xcblxcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIGNvbG9yOiAjNjY3MDg1O1xcbn1cXG5cXG4udGFiLWJhciBpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWQgKyAudGFiIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWM0YTBhO1xcbiAgY29sb3I6ICNlYzRhMGE7XFxufVxcblxcbi5yZXN0YXVyYW50LWZpbHRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIHBhZGRpbmc6IDAgMTZweDtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbi5yZXN0YXVyYW50LWZpbHRlci1jb250YWluZXItLWNsb3NlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yZXN0YXVyYW50LWZpbHRlci1jb250YWluZXIgc2VsZWN0IHtcXG4gIGhlaWdodDogNDRweDtcXG4gIG1pbi13aWR0aDogMTI1cHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDBkNWRkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuXFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5yZXN0YXVyYW50LWZpbHRlciB7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5yZXN0YXVyYW50LWxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgcGFkZGluZzogMCAxNnB4O1xcbiAgbWFyZ2luOiAxNnB4IDA7XFxufVxcblxcbi5yZXN0YXVyYW50LWxpc3QtY29udGFpbmVyLS1jbG9zZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmVzdGF1cmFudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFxuICBwYWRkaW5nOiAxNnB4IDhweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllYWVkO1xcbn1cXG5cXG4ucmVzdGF1cmFudCAucmVzdGF1cmFudF9faW5mbyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZhdm9yaXRlLWljb24ge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6ICNmNmE4OGE7XFxufVxcblxcbi5mYXZvcml0ZS1pY29uLmZhdm9yaXRlIHtcXG4gIGNvbG9yOiAjZWM0YTBhO1xcbn1cXG5cXG4ucmVzdGF1cmFudF9fY2F0ZWdvcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgbWluLXdpZHRoOiA2NHB4O1xcbiAgbWluLWhlaWdodDogNjRweDtcXG5cXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0ZW4tY29sb3IpO1xcbn1cXG5cXG4uY2F0ZWdvcnktaWNvbiB7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMzZweDtcXG59XFxuXFxuLnJlc3RhdXJhbnRfX2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5yZXN0YXVyYW50X19uYW1lIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnJlc3RhdXJhbnRfX2Rpc3RhbmNlIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnJlc3RhdXJhbnRfX2Rlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcbiAgcGFkZGluZy10b3A6IDhweDtcXG5cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWwtLW9wZW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbC1iYWNrZHJvcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgcGFkZGluZzogMzJweCAxNnB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JleS0xMDApO1xcbn1cXG5cXG4ubW9kYWwtdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcXG59XFxuXFxuLmZvcm0taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XFxufVxcblxcbi5mb3JtLWl0ZW0gbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWdyZXktNDAwKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmZvcm0taXRlbS0tcmVxdWlyZWQgbGFiZWw6OmFmdGVyIHtcXG4gIHBhZGRpbmctbGVmdDogNHB4O1xcblxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29udGVudDogJyonO1xcbn1cXG5cXG4uZm9ybS1pdGVtIC5oZWxwLXRleHQge1xcbiAgY29sb3I6IHZhcigtLWdyZXktMzAwKTtcXG59XFxuXFxuLmZvcm0taXRlbSBpbnB1dCxcXG4uZm9ybS1pdGVtIHRleHRhcmVhLFxcbi5mb3JtLWl0ZW0gc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIG1hcmdpbjogNnB4IDA7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LTIwMCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuXFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5mb3JtLWl0ZW0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZm9ybS1pdGVtIHNlbGVjdCB7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuXFxuICBwYWRkaW5nOiA4cHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LTIwMCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuXFxuICBjb2xvcjogdmFyKC0tZ3JleS0zMDApO1xcbn1cXG5cXG4uZGV0YWlsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgaGVpZ2h0OiA2MDhweDtcXG59XFxuXFxuLmRldGFpbCAuZmF2b3JpdGUtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogOHB4O1xcbn1cXG5cXG4uZGV0YWlsIGgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5kZXRhaWwgLnJlc3RhdXJhbnRfX3Rha2UtbWludXRlIHtcXG4gIGNvbG9yOiAjZWM0YTBhO1xcbn1cXG5cXG4uZGV0YWlsIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMjQwcHg7XFxuXFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XFxufVxcblxcbi5kZXRhaWwgLmxpbmstYXJlYSBhIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG5pbnB1dFtuYW1lPSduYW1lJ10sXFxuaW5wdXRbbmFtZT0nbGluayddIHtcXG4gIGhlaWdodDogNDRweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDRweDtcXG5cXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b246bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi5idXR0b24tLXNlY29uZGFyeSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LTMwMCk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cXG4gIGNvbG9yOiB2YXIoLS1ncmV5LTMwMCk7XFxufVxcblxcbi5idXR0b24tLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFxuICBjb2xvcjogdmFyKC0tZ3JleS0xMDApO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FB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ICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICNlYzRhMGE7XFxuICAtLWxpZ2h0ZW4tY29sb3I6ICNmNmE4OGE7XFxuICAtLWdyZXktMTAwOiAjZmZmZmZmO1xcbiAgLS1ncmV5LTIwMDogI2QwZDVkZDtcXG4gIC0tZ3JleS0zMDA6ICM2NjcwODU7XFxuICAtLWdyZXktNDAwOiAjMzQ0MDU0O1xcbiAgLS1ncmV5LTUwMDogIzAwMDAwMDtcXG59XFxuXFxuLnRleHQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGV4dC1zdWJ0aXRsZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50ZXh0LWJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4udGV4dC1jYXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmduYiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNjRweDtcXG5cXG4gIHBhZGRpbmc6IDAgMTZweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uZ25iX190aXRsZSB7XFxuICBjb2xvcjogI2ZjZmNmZDtcXG59XFxuXFxuLmduYl9fYnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcblxcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ25iX19idXR0b24gaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4udGFiLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG59XFxuXFxuLnRhYi1iYXIgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFiLWJhciAudGFiIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTllYWVkO1xcblxcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIGNvbG9yOiAjNjY3MDg1O1xcbn1cXG5cXG4udGFiLWJhciBpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWQgKyAudGFiIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWM0YTBhO1xcbiAgY29sb3I6ICNlYzRhMGE7XFxufVxcblxcbi5yZXN0YXVyYW50LWZpbHRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIHBhZGRpbmc6IDAgMTZweDtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbi5yZXN0YXVyYW50LWZpbHRlci1jb250YWluZXItLWNsb3NlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yZXN0YXVyYW50LWZpbHRlci1jb250YWluZXIgc2VsZWN0IHtcXG4gIGhlaWdodDogNDRweDtcXG4gIG1pbi13aWR0aDogMTI1cHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDBkNWRkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuXFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5yZXN0YXVyYW50LWZpbHRlciB7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5yZXN0YXVyYW50LWxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgcGFkZGluZzogMCAxNnB4O1xcbiAgbWFyZ2luOiAxNnB4IDA7XFxufVxcblxcbi5yZXN0YXVyYW50LWxpc3QtY29udGFpbmVyLS1jbG9zZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmVzdGF1cmFudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFxuICBwYWRkaW5nOiAxNnB4IDhweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllYWVkO1xcbn1cXG5cXG4ucmVzdGF1cmFudCAucmVzdGF1cmFudF9faW5mbyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZhdm9yaXRlLWljb24ge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6ICNmNmE4OGE7XFxufVxcblxcbi5mYXZvcml0ZS1pY29uLmZhdm9yaXRlIHtcXG4gIGNvbG9yOiAjZWM0YTBhO1xcbn1cXG5cXG4ucmVzdGF1cmFudF9fY2F0ZWdvcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgbWluLXdpZHRoOiA2NHB4O1xcbiAgbWluLWhlaWdodDogNjRweDtcXG5cXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0ZW4tY29sb3IpO1xcbn1cXG5cXG4uY2F0ZWdvcnktaWNvbiB7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMzZweDtcXG59XFxuXFxuLnJlc3RhdXJhbnRfX2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5yZXN0YXVyYW50X19uYW1lIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnJlc3RhdXJhbnRfX2Rpc3RhbmNlIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnJlc3RhdXJhbnRfX2Rlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcbiAgcGFkZGluZy10b3A6IDhweDtcXG5cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWwtLW9wZW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbC1iYWNrZHJvcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgcGFkZGluZzogMzJweCAxNnB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JleS0xMDApO1xcbn1cXG5cXG4ubW9kYWwtdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcXG59XFxuXFxuLmZvcm0taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XFxufVxcblxcbi5mb3JtLWl0ZW0gbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWdyZXktNDAwKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmZvcm0taXRlbS0tcmVxdWlyZWQgbGFiZWw6OmFmdGVyIHtcXG4gIHBhZGRpbmctbGVmdDogNHB4O1xcblxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29udGVudDogJyonO1xcbn1cXG5cXG4uZm9ybS1pdGVtIC5oZWxwLXRleHQge1xcbiAgY29sb3I6IHZhcigtLWdyZXktMzAwKTtcXG59XFxuXFxuLmZvcm0taXRlbSBpbnB1dCxcXG4uZm9ybS1pdGVtIHRleHRhcmVhLFxcbi5mb3JtLWl0ZW0gc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIG1hcmdpbjogNnB4IDA7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LTIwMCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuXFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5mb3JtLWl0ZW0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZm9ybS1pdGVtIHNlbGVjdCB7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuXFxuICBwYWRkaW5nOiA4cHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LTIwMCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuXFxuICBjb2xvcjogdmFyKC0tZ3JleS0zMDApO1xcbn1cXG5cXG4uZGV0YWlsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgaGVpZ2h0OiA2MDhweDtcXG59XFxuXFxuLmRldGFpbCAuZmF2b3JpdGUtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogOHB4O1xcbn1cXG5cXG4uZGV0YWlsIGgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5kZXRhaWwgLnJlc3RhdXJhbnRfX3Rha2UtbWludXRlIHtcXG4gIGNvbG9yOiAjZWM0YTBhO1xcbn1cXG5cXG4uZGV0YWlsIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMjQwcHg7XFxuXFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XFxufVxcblxcbi5kZXRhaWwgLmxpbmstYXJlYSBhIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG5pbnB1dFtuYW1lPSduYW1lJ10sXFxuaW5wdXRbbmFtZT0nbGluayddIHtcXG4gIGhlaWdodDogNDRweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDRweDtcXG5cXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b246bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi5idXR0b24tLXNlY29uZGFyeSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LTMwMCk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cXG4gIGNvbG9yOiB2YXIoLS1ncmV5LTMwMCk7XFxufVxcblxcbi5idXR0b24tLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFxuICBjb2xvcjogdmFyKC0tZ3JleS0xMDApO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFkZC1idXR0b24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNhdGVnb3J5LWFzaWFuLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYXRlZ29yeS1jaGluZXNlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYXRlZ29yeS1ldGMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNhdGVnb3J5LXdlc3Rlcm4ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNhdGVnb3J5LWtvcmVhbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2F0ZWdvcnktamFwYW5lc2UucG5nXCI7IiwiZXhwb3J0IGNvbnN0IENBVEVHT1JZX05BTUUgPSB7XG4gICAgYWxsOiAn7KCE7LK0JyxcbiAgICBrb3JlYW46ICftlZzsi50nLFxuICAgIGNoaW5lc2U6ICfspJHsi50nLFxuICAgIGphcGFuZXNlOiAn7J287IudJyxcbiAgICB3ZXN0ZXJuOiAn7JaR7IudJyxcbiAgICBhc2lhbjogJ+yVhOyLnOyViCcsXG4gICAgZXRjOiAn6riw7YOAJyxcbn07XG5leHBvcnQgY29uc3QgQ0FURUdPUllfSU1BR0VfVVJMID0ge1xuICAgIFtDQVRFR09SWV9OQU1FLmtvcmVhbl06ICcuL2NhdGVnb3J5LWtvcmVhbi5wbmcnLFxuICAgIFtDQVRFR09SWV9OQU1FLmNoaW5lc2VdOiAnLi9jYXRlZ29yeS1jaGluZXNlLnBuZycsXG4gICAgW0NBVEVHT1JZX05BTUUuamFwYW5lc2VdOiAnLi9jYXRlZ29yeS1qYXBhbmVzZS5wbmcnLFxuICAgIFtDQVRFR09SWV9OQU1FLndlc3Rlcm5dOiAnLi9jYXRlZ29yeS13ZXN0ZXJuLnBuZycsXG4gICAgW0NBVEVHT1JZX05BTUUuYXNpYW5dOiAnLi9jYXRlZ29yeS1hc2lhbi5wbmcnLFxuICAgIFtDQVRFR09SWV9OQU1FLmV0Y106ICcuL2NhdGVnb3J5LWV0Yy5wbmcnLFxufTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0NBVEVHT1JZID0gQ0FURUdPUllfTkFNRS5hbGw7XG5leHBvcnQgY29uc3QgREVGQVVMVF9TT1JUSU5HID0gJ25hbWUnO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9SZXN0YXVyYW50c19yZXN0YXVyYW50cztcbmltcG9ydCB7IERFRkFVTFRfU09SVElORyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5jbGFzcyBSZXN0YXVyYW50cyB7XG4gICAgY29uc3RydWN0b3IocmVzdGF1cmFudHMpIHtcbiAgICAgICAgX1Jlc3RhdXJhbnRzX3Jlc3RhdXJhbnRzLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9SZXN0YXVyYW50c19yZXN0YXVyYW50cywgcmVzdGF1cmFudHMsIFwiZlwiKTtcbiAgICB9XG4gICAgZ2V0QWxsKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVzdGF1cmFudHNfcmVzdGF1cmFudHMsIFwiZlwiKTtcbiAgICB9XG4gICAgZmluZFJlc3RhdXJhbnQoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Jlc3RhdXJhbnRzX3Jlc3RhdXJhbnRzLCBcImZcIikuZmluZCgocmVzdGF1cmFudCkgPT4gcmVzdGF1cmFudC5pZCA9PT0gaWQpO1xuICAgIH1cbiAgICBnZXRGaWx0ZXJlZChjYXRlZ29yeSwgc29ydGluZykge1xuICAgICAgICB0aGlzLnNvcnQoc29ydGluZyk7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZXN0YXVyYW50c19yZXN0YXVyYW50cywgXCJmXCIpLmZpbHRlcigocmVzdGF1cmFudCkgPT4gY2F0ZWdvcnkgPT09ICfsoITssrQnIHx8IHJlc3RhdXJhbnQuY2F0ZWdvcnkgPT09IGNhdGVnb3J5KTtcbiAgICB9XG4gICAgZ2V0RmF2b3JpdGUoKSB7XG4gICAgICAgIHRoaXMuc29ydChERUZBVUxUX1NPUlRJTkcpO1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVzdGF1cmFudHNfcmVzdGF1cmFudHMsIFwiZlwiKS5maWx0ZXIoKHJlc3RhdXJhbnQpID0+IHJlc3RhdXJhbnQuZmF2b3JpdGUgPT09IHRydWUpO1xuICAgIH1cbiAgICBzb3J0KHNvcnRpbmcpIHtcbiAgICAgICAgY29uc3Qgc29ydFBpdm90ID0gKHJlc3RhdXJhbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChzb3J0aW5nID09PSAnbmFtZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3RhdXJhbnQubmFtZTtcbiAgICAgICAgICAgIGlmIChzb3J0aW5nID09PSAndGFrZU1pbnV0ZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihyZXN0YXVyYW50LnRha2VNaW51dGUpO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH07XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Jlc3RhdXJhbnRzX3Jlc3RhdXJhbnRzLCBcImZcIikuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKHNvcnRQaXZvdChhKSA+IHNvcnRQaXZvdChiKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIGlmIChzb3J0UGl2b3QoYSkgPCBzb3J0UGl2b3QoYikpXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9SZXN0YXVyYW50c19yZXN0YXVyYW50cyA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50cztcbiIsImNvbnN0IG1vZGFsID0gKHsgaWQsIGNvbnRlbnQgfSkgPT4ge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cIiR7aWR9XCIgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCI+XG4gICAgICAgICR7Y29udGVudH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xufTtcbmV4cG9ydCBkZWZhdWx0IG1vZGFsO1xuIiwiY29uc3QgZmF2b3JpdGVJY29uID0gKHsgaWQsIGZhdm9yaXRlIH0pID0+IHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgZGF0YS1pZD1cIiR7aWR9XCIgY2xhc3M9XCJmYXZvcml0ZS1pY29uICR7ZmF2b3JpdGUgPyAnZmF2b3JpdGUnIDogJyd9XCI+XG4gICAgICAke2Zhdm9yaXRlID8gJ+KYhScgOiAn4piGJ31cbiAgICA8L2Rpdj5cbiAgYDtcbn07XG5leHBvcnQgZGVmYXVsdCBmYXZvcml0ZUljb247XG4iLCJpbXBvcnQgcmVzdGF1cmFudExpc3RJdGVtIGZyb20gJy4vcmVzdGF1cmFudExpc3RJdGVtJztcbmNvbnN0IHJlc3RhdXJhbnRMaXN0ID0gKHsgcmVzdGF1cmFudHMgfSkgPT4ge1xuICAgIHJldHVybiBgXG4gICAgPHVsIGNsYXNzPVwicmVzdGF1cmFudC1saXN0XCI+XG4gICAgICAke3Jlc3RhdXJhbnRzLm1hcCgocmVzdGF1cmFudCkgPT4gcmVzdGF1cmFudExpc3RJdGVtKHsgcmVzdGF1cmFudCB9KSkuam9pbignJyl9XG4gICAgPC91bD5cbiAgYDtcbn07XG5leHBvcnQgZGVmYXVsdCByZXN0YXVyYW50TGlzdDtcbiIsImltcG9ydCBmYXZvcml0ZUljb24gZnJvbSAnLi4vY29tbW9uL2Zhdm9yaXRlSWNvbic7XG5pbXBvcnQgeyBDQVRFR09SWV9JTUFHRV9VUkwgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuY29uc3QgcmVzdGF1cmFudExpc3RJdGVtID0gKHsgcmVzdGF1cmFudCB9KSA9PiB7XG4gICAgY29uc3QgeyBpZCwgY2F0ZWdvcnksIG5hbWUsIHRha2VNaW51dGUsIGRlc2NyaXB0aW9uLCBmYXZvcml0ZSB9ID0gcmVzdGF1cmFudDtcbiAgICByZXR1cm4gYFxuICAgIDxsaSBkYXRhLWlkPVwiJHtpZH1cIiBjbGFzcz1cInJlc3RhdXJhbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50X19jYXRlZ29yeVwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7Q0FURUdPUllfSU1BR0VfVVJMW2NhdGVnb3J5XX1cIiBhbHQ9XCIke2NhdGVnb3J5fVwiIGNsYXNzPVwiY2F0ZWdvcnktaWNvblwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudF9faW5mb1wiPlxuICAgICAgICA8aDMgY2xhc3M9XCJyZXN0YXVyYW50X19uYW1lIHRleHQtc3VidGl0bGVcIj4ke25hbWV9PC9oMz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXN0YXVyYW50X19kaXN0YW5jZSB0ZXh0LWJvZHlcIj7suqDtjbzsiqTrtoDthLAgJHt0YWtlTWludXRlfeu2hCDrgrQ8L3NwYW4+XG4gICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudF9fZGVzY3JpcHRpb24gdGV4dC1ib2R5XCI+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgICR7ZmF2b3JpdGVJY29uKHsgaWQsIGZhdm9yaXRlIH0pfVxuICAgIDwvbGk+XG4gIGA7XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVzdGF1cmFudExpc3RJdGVtO1xuIiwiY29uc3Qgc2VsZWN0ID0gKHsgaWQsIG5hbWUsIHJlcXVpcmVkLCBvcHRpb25zIH0pID0+IHtcbiAgICByZXR1cm4gYFxuICAgIDxzZWxlY3QgaWQ9XCIke2lkfVwiIG5hbWU9XCIke25hbWV9XCIgY2xhc3M9XCJyZXN0YXVyYW50LWZpbHRlclwiICR7cmVxdWlyZWQgPyAncmVxdWlyZWQnIDogJyd9PlxuICAgICAgJHtvcHRpb25zXG4gICAgICAgIC5tYXAoKHsgdmFsdWUsIGNvbnRlbnQgfSkgPT4gYDxvcHRpb24gdmFsdWU9XCIke3ZhbHVlfVwiPiR7Y29udGVudH08L29wdGlvbj5gKVxuICAgICAgICAuam9pbignJyl9XG4gICAgPC9zZWxlY3Q+XG4gIGA7XG59O1xuZXhwb3J0IGRlZmF1bHQgc2VsZWN0O1xuIiwiY29uc3QgYnV0dG9uID0gKHsgaWQsIHR5cGUsIHN0eWxlLCBjb250ZW50IH0pID0+IHtcbiAgICByZXR1cm4gYFxuICAgIDxidXR0b24gaWQ9XCIke2lkfVwiIHR5cGU9XCIke3R5cGV9XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS0ke3N0eWxlfSB0ZXh0LWNhcHRpb25cIj4ke2NvbnRlbnR9PC9idXR0b24+XG4gIGA7XG59O1xuZXhwb3J0IGRlZmF1bHQgYnV0dG9uO1xuIiwiaW1wb3J0IHNlbGVjdCBmcm9tICcuLi9jb21tb24vc2VsZWN0JztcbmltcG9ydCBidXR0b24gZnJvbSAnLi4vY29tbW9uL2J1dHRvbic7XG5jb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5T3B0aW9ucyA9IFtcbiAgICAgICAgeyB2YWx1ZTogJycsIGNvbnRlbnQ6ICfshKDtg53tlbQg7KO87IS47JqUJyB9LFxuICAgICAgICB7IHZhbHVlOiAn7ZWc7IudJywgY29udGVudDogJ+2VnOyLnScgfSxcbiAgICAgICAgeyB2YWx1ZTogJ+ykkeyLnScsIGNvbnRlbnQ6ICfspJHsi50nIH0sXG4gICAgICAgIHsgdmFsdWU6ICfsnbzsi50nLCBjb250ZW50OiAn7J287IudJyB9LFxuICAgICAgICB7IHZhbHVlOiAn7JaR7IudJywgY29udGVudDogJ+yWkeyLnScgfSxcbiAgICAgICAgeyB2YWx1ZTogJ+yVhOyLnOyViCcsIGNvbnRlbnQ6ICfslYTsi5zslYgnIH0sXG4gICAgICAgIHsgdmFsdWU6ICfquLDtg4AnLCBjb250ZW50OiAn6riw7YOAJyB9LFxuICAgIF07XG4gICAgY29uc3QgdGFrZU1pbnV0ZU9wdGlvbnMgPSBbXG4gICAgICAgIHsgdmFsdWU6ICcnLCBjb250ZW50OiAn7ISg7YOd7ZW0IOyjvOyEuOyalCcgfSxcbiAgICAgICAgeyB2YWx1ZTogJzUnLCBjb250ZW50OiAnNeu2hCDrgrQnIH0sXG4gICAgICAgIHsgdmFsdWU6ICcxMCcsIGNvbnRlbnQ6ICcxMOu2hCDrgrQnIH0sXG4gICAgICAgIHsgdmFsdWU6ICcxNScsIGNvbnRlbnQ6ICcxNeu2hCDrgrQnIH0sXG4gICAgICAgIHsgdmFsdWU6ICcyMCcsIGNvbnRlbnQ6ICcyMOu2hCDrgrQnIH0sXG4gICAgICAgIHsgdmFsdWU6ICczMCcsIGNvbnRlbnQ6ICczMOu2hCDrgrQnIH0sXG4gICAgXTtcbiAgICByZXR1cm4gYFxuICAgIDxmb3JtPlxuICAgICAgPGgyIGNsYXNzPVwibW9kYWwtdGl0bGUgdGV4dC10aXRsZVwiPuyDiOuhnOyatCDsnYzsi53soJA8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0taXRlbSBmb3JtLWl0ZW0tLXJlcXVpcmVkXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJjYXRlZ29yeSB0ZXh0LWNhcHRpb25cIj7subTthYzqs6Drpqw8L2xhYmVsPlxuICAgICAgICAke3NlbGVjdCh7XG4gICAgICAgIGlkOiAnY2F0ZWdvcnknLFxuICAgICAgICBuYW1lOiAnY2F0ZWdvcnknLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgb3B0aW9uczogY2F0ZWdvcnlPcHRpb25zLFxuICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtIGZvcm0taXRlbS0tcmVxdWlyZWRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWUgdGV4dC1jYXB0aW9uXCI+7J2066aEPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0taXRlbSBmb3JtLWl0ZW0tLXJlcXVpcmVkXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkaXN0YW5jZSB0ZXh0LWNhcHRpb25cIj7qsbDrpqwo64+E67O0IOydtOuPmSDsi5zqsIQpIDwvbGFiZWw+XG4gICAgICAgICR7c2VsZWN0KHtcbiAgICAgICAgaWQ6ICd0YWtlTWludXRlJyxcbiAgICAgICAgbmFtZTogJ3Rha2VNaW51dGUnLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgb3B0aW9uczogdGFrZU1pbnV0ZU9wdGlvbnMsXG4gICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uIHRleHQtY2FwdGlvblwiPuyEpOuqhTwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgY29scz1cIjMwXCIgcm93cz1cIjVcIj48L3RleHRhcmVhPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtdGV4dCB0ZXh0LWNhcHRpb25cIj7rqZTribQg65OxIOy2lOqwgCDsoJXrs7Trpbwg7J6F66Cl7ZW0IOyjvOyEuOyalC48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImxpbmsgdGV4dC1jYXB0aW9uXCI+7LC46rOgIOunge2BrDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsaW5rXCIgaWQ9XCJsaW5rXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC10ZXh0IHRleHQtY2FwdGlvblwiPuunpOyepSDsoJXrs7Trpbwg7ZmV7J247ZWgIOyImCDsnojripQg66eB7YGs66W8IOyeheugpe2VtCDso7zshLjsmpQuPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAke2J1dHRvbih7IGlkOiAnY2FuY2VsJywgdHlwZTogJ2J1dHRvbicsIHN0eWxlOiAnc2Vjb25kYXJ5JywgY29udGVudDogJ+y3qOyGjO2VmOq4sCcgfSl9XG4gICAgICAgICR7YnV0dG9uKHsgaWQ6ICdzdWJtaXQnLCB0eXBlOiAnc3VibWl0Jywgc3R5bGU6ICdwcmltYXJ5JywgY29udGVudDogJ+y2lOqwgO2VmOq4sCcgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIGA7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybTtcbiIsImV4cG9ydCBjb25zdCAkID0gKHNlbGVjdG9ycykgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycyk7XG59O1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9DdXN0b21TdG9yYWdlX2tleSwgX0N1c3RvbVN0b3JhZ2VfZGVmYXVsdFZhbHVlO1xuY2xhc3MgQ3VzdG9tU3RvcmFnZSB7XG4gICAgY29uc3RydWN0b3Ioa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgX0N1c3RvbVN0b3JhZ2Vfa2V5LnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQ3VzdG9tU3RvcmFnZV9kZWZhdWx0VmFsdWUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1c3RvbVN0b3JhZ2Vfa2V5LCBrZXksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VzdG9tU3RvcmFnZV9kZWZhdWx0VmFsdWUsIGRlZmF1bHRWYWx1ZSwgXCJmXCIpO1xuICAgIH1cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXN0b21TdG9yYWdlX2tleSwgXCJmXCIpKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXN0b21TdG9yYWdlX2RlZmF1bHRWYWx1ZSwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXN0b21TdG9yYWdlX2tleSwgXCJmXCIpLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIH1cbn1cbl9DdXN0b21TdG9yYWdlX2tleSA9IG5ldyBXZWFrTWFwKCksIF9DdXN0b21TdG9yYWdlX2RlZmF1bHRWYWx1ZSA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgZGVmYXVsdCBDdXN0b21TdG9yYWdlO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9BcHBfcm9vdCwgX0FwcF9zdG9yYWdlLCBfQXBwX21vZGVsO1xuaW1wb3J0IFJlc3RhdXJhbnRzIGZyb20gJy4vZG9tYWluL21vZGVscy9SZXN0YXVyYW50cyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vY29tcG9uZW50L2hlYWRlcic7XG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9jb21wb25lbnQvYm90dG9tU2hlZXQvbW9kYWwnO1xuaW1wb3J0IHJlc3RhdXJhbnRMaXN0IGZyb20gJy4vY29tcG9uZW50L3Jlc3RhdXJhbnRMaXN0UGFnZS9yZXN0YXVyYW50TGlzdCc7XG5pbXBvcnQgcmVzdGF1cmFudEZpbHRlckNvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudC9yZXN0YXVyYW50RmlsdGVyQ29udGFpbmVyJztcbmltcG9ydCB0YWJCYXIgZnJvbSAnLi9jb21wb25lbnQvdGFiQmFyJztcbmltcG9ydCBmb3JtIGZyb20gJy4vY29tcG9uZW50L2JvdHRvbVNoZWV0L2Zvcm0nO1xuaW1wb3J0IGRldGFpbCBmcm9tICcuL2NvbXBvbmVudC9ib3R0b21TaGVldC9kZXRhaWwnO1xuaW1wb3J0IHsgJCB9IGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCBDdXN0b21TdG9yYWdlIGZyb20gJy4vdXRpbHMvQ3VzdG9tU3RvcmFnZSc7XG5pbXBvcnQgeyBERUZBVUxUX0NBVEVHT1JZLCBERUZBVUxUX1NPUlRJTkcgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKHJvb3QpIHtcbiAgICAgICAgX0FwcF9yb290LnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQXBwX3N0b3JhZ2Uuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9BcHBfbW9kZWwuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIHRoaXMuaGFuZGxlTGlzdEl0ZW0gPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5mYXZvcml0ZS1pY29uJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZhdm9yaXRlKGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1vZGVsKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJMaXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURldGFpbE1vZGFsKGUpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRGV0YWlsTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbml0TW9kZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9BcHBfbW9kZWwsIG5ldyBSZXN0YXVyYW50cyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BcHBfc3RvcmFnZSwgXCJmXCIpLmdldFZhbHVlKCkpLCBcImZcIik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudG9nZ2xlRm9ybU1vZGFsID0gKCkgPT4ge1xuICAgICAgICAgICAgJCgnI2Zvcm0tbW9kYWwnKS5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbC0tb3BlbicpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvZ2dsZURldGFpbE1vZGFsID0gKCkgPT4ge1xuICAgICAgICAgICAgJCgnI2RldGFpbC1tb2RhbCcpLmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsLS1vcGVuJyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybSA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3RhdXJhbnQgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IFN0cmluZyhEYXRlLm5vdygpKSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogZm9ybS5nZXQoJ2NhdGVnb3J5JyksXG4gICAgICAgICAgICAgICAgbmFtZTogZm9ybS5nZXQoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICB0YWtlTWludXRlOiBmb3JtLmdldCgndGFrZU1pbnV0ZScpLFxuICAgICAgICAgICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZm9ybS5nZXQoJ2Rlc2NyaXB0aW9uJyksXG4gICAgICAgICAgICAgICAgbGluazogZm9ybS5nZXQoJ2xpbmsnKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BcHBfc3RvcmFnZSwgXCJmXCIpLnNldFZhbHVlKFsuLi5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BcHBfc3RvcmFnZSwgXCJmXCIpLmdldFZhbHVlKCksIHJlc3RhdXJhbnRdKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbml0Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgICAgICQoJyNmb3JtLW1vZGFsIC5tb2RhbC1jb250YWluZXInKS5pbm5lckhUTUwgPSBmb3JtKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVuZGVyTGlzdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRjYXRlZ29yeUZpbHRlciA9ICQoJyNjYXRlZ29yeS1maWx0ZXInKTtcbiAgICAgICAgICAgIGNvbnN0ICRzb3J0aW5nRmlsdGVyID0gJCgnI3NvcnRpbmctZmlsdGVyJyk7XG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9ICRjYXRlZ29yeUZpbHRlci5vcHRpb25zWyRjYXRlZ29yeUZpbHRlci5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRpbmcgPSAkc29ydGluZ0ZpbHRlci5vcHRpb25zWyRzb3J0aW5nRmlsdGVyLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcmVzdGF1cmFudHMgPSAkKCdpbnB1dFtuYW1lPWxpc3RUeXBlXTpjaGVja2VkJykuaWQgPT09ICdmYXZvcml0ZSdcbiAgICAgICAgICAgICAgICA/IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FwcF9tb2RlbCwgXCJmXCIpLmdldEZhdm9yaXRlKClcbiAgICAgICAgICAgICAgICA6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FwcF9tb2RlbCwgXCJmXCIpLmdldEZpbHRlcmVkKGNhdGVnb3J5LCBzb3J0aW5nKTtcbiAgICAgICAgICAgICQoJy5yZXN0YXVyYW50LWxpc3QnKS5vdXRlckhUTUwgPSByZXN0YXVyYW50TGlzdCh7IHJlc3RhdXJhbnRzIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvZ2dsZUZpbHRlckNvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgICQoJy5yZXN0YXVyYW50LWZpbHRlci1jb250YWluZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdyZXN0YXVyYW50LWZpbHRlci1jb250YWluZXItLWNsb3NlJyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlRmF2b3JpdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgbmV3UmVzdGF1cmFudHMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BcHBfbW9kZWwsIFwiZlwiKVxuICAgICAgICAgICAgICAgIC5nZXRBbGwoKVxuICAgICAgICAgICAgICAgIC5tYXAoKHJlc3RhdXJhbnQpID0+IHJlc3RhdXJhbnQuaWQgPT09IGlkID8geyAuLi5yZXN0YXVyYW50LCBmYXZvcml0ZTogIXJlc3RhdXJhbnQuZmF2b3JpdGUgfSA6IHJlc3RhdXJhbnQpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXBwX3N0b3JhZ2UsIFwiZlwiKS5zZXRWYWx1ZShuZXdSZXN0YXVyYW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlRGV0YWlsTW9kYWwgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5yZXN0YXVyYW50JykgfHwgZS50YXJnZXQuY2xvc2VzdCgnLmRldGFpbCcpO1xuICAgICAgICAgICAgY29uc3QgcmVzdGF1cmFudCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FwcF9tb2RlbCwgXCJmXCIpLmZpbmRSZXN0YXVyYW50KCRwYXJlbnQuZGF0YXNldC5pZCk7XG4gICAgICAgICAgICAkKCcjZGV0YWlsLW1vZGFsIC5tb2RhbC1jb250YWluZXInKS5pbm5lckhUTUwgPSBkZXRhaWwoeyByZXN0YXVyYW50IH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlbW92ZVJlc3RhdXJhbnQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcuZGV0YWlsJykuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Jlc3RhdXJhbnRzID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXBwX21vZGVsLCBcImZcIikuZ2V0QWxsKCkuZmlsdGVyKChyZXN0YXVyYW50KSA9PiByZXN0YXVyYW50LmlkICE9PSBpZCk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BcHBfc3RvcmFnZSwgXCJmXCIpLnNldFZhbHVlKG5ld1Jlc3RhdXJhbnRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQXBwX3Jvb3QsIHJvb3QsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQXBwX3N0b3JhZ2UsIG5ldyBDdXN0b21TdG9yYWdlKCdyZXN0YXVyYW50cycsIFtdKSwgXCJmXCIpO1xuICAgICAgICB0aGlzLmluaXRNb2RlbCgpO1xuICAgIH1cbiAgICBpbml0UmVuZGVyKCkge1xuICAgICAgICBjb25zdCByZXN0YXVyYW50cyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FwcF9tb2RlbCwgXCJmXCIpLmdldEZpbHRlcmVkKERFRkFVTFRfQ0FURUdPUlksIERFRkFVTFRfU09SVElORyk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FwcF9yb290LCBcImZcIikuaW5uZXJIVE1MID0gYFxuICAgICAgJHtoZWFkZXIoKX1cbiAgICAgIDxtYWluPlxuICAgICAgICAke3RhYkJhcih7IGNoZWNrZWRUeXBlOiAnYWxsJyB9KX1cbiAgICAgICAgJHtyZXN0YXVyYW50RmlsdGVyQ29udGFpbmVyKCl9XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicmVzdGF1cmFudC1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICR7cmVzdGF1cmFudExpc3Qoe1xuICAgICAgICAgICAgcmVzdGF1cmFudHMsXG4gICAgICAgIH0pfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICR7bW9kYWwoeyBpZDogJ2Zvcm0tbW9kYWwnLCBjb250ZW50OiBmb3JtKCkgfSl9XG4gICAgICAgICR7bW9kYWwoeyBpZDogJ2RldGFpbC1tb2RhbCcsIGNvbnRlbnQ6ICcnIH0pfVxuICAgICAgPC9tYWluPlxuICAgIGA7XG4gICAgfVxuICAgIGFkZEV2ZW50cygpIHtcbiAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yczogJ2hlYWRlciBidXR0b24nLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2xpY2snLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IFt0aGlzLnRvZ2dsZUZvcm1Nb2RhbF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yczogJyNmb3JtLW1vZGFsICNjYW5jZWwnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2xpY2snLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IFt0aGlzLnRvZ2dsZUZvcm1Nb2RhbF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yczogJyNmb3JtLW1vZGFsIGZvcm0nLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0Rm9ybSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0Rm9ybSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVGb3JtTW9kYWwsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1vZGVsLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckxpc3QsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JzOiAnI2NhdGVnb3J5LWZpbHRlcicsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdjaGFuZ2UnLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IFt0aGlzLnJlbmRlckxpc3RdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcnM6ICcjc29ydGluZy1maWx0ZXInLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2hhbmdlJyxcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBbdGhpcy5yZW5kZXJMaXN0XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JzOiAnLnRhYi1iYXInLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2hhbmdlJyxcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBbdGhpcy50b2dnbGVGaWx0ZXJDb250YWluZXIsIHRoaXMucmVuZGVyTGlzdF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yczogJy5yZXN0YXVyYW50LWxpc3QnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2xpY2snLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IFt0aGlzLmhhbmRsZUxpc3RJdGVtXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JzOiAnI2RldGFpbC1tb2RhbCAuZmF2b3JpdGUtaWNvbicsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdjbGljaycsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogW3RoaXMudXBkYXRlRmF2b3JpdGUsIHRoaXMuaW5pdE1vZGVsLCB0aGlzLnVwZGF0ZURldGFpbE1vZGFsLCB0aGlzLnJlbmRlckxpc3RdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcnM6ICcjZGV0YWlsLW1vZGFsICNjbG9zZScsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdjbGljaycsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogW3RoaXMudG9nZ2xlRGV0YWlsTW9kYWxdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcnM6ICcjZGV0YWlsLW1vZGFsICNyZW1vdmUnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2xpY2snLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IFt0aGlzLnJlbW92ZVJlc3RhdXJhbnQsIHRoaXMuaW5pdE1vZGVsLCB0aGlzLnJlbmRlckxpc3QsIHRoaXMudG9nZ2xlRGV0YWlsTW9kYWxdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXS5mb3JFYWNoKChtYW51YWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnQobWFudWFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZEV2ZW50KHsgc2VsZWN0b3JzLCBldmVudCwgYWN0aW9ucyB9KSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FwcF9yb290LCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKHNlbGVjdG9ycyk7XG4gICAgICAgICAgICBpZiAoJHRhcmdldCA9PT0gbnVsbCB8fCAhJHRhcmdldC5jb250YWlucyhlLnRhcmdldCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBhY3Rpb24oZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX0FwcF9yb290ID0gbmV3IFdlYWtNYXAoKSwgX0FwcF9zdG9yYWdlID0gbmV3IFdlYWtNYXAoKSwgX0FwcF9tb2RlbCA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL2ltYWdlL2FkZC1idXR0b24ucG5nJztcbmltcG9ydCAnLi4vaW1hZ2UvY2F0ZWdvcnktYXNpYW4ucG5nJztcbmltcG9ydCAnLi4vaW1hZ2UvY2F0ZWdvcnktY2hpbmVzZS5wbmcnO1xuaW1wb3J0ICcuLi9pbWFnZS9jYXRlZ29yeS1ldGMucG5nJztcbmltcG9ydCAnLi4vaW1hZ2UvY2F0ZWdvcnktd2VzdGVybi5wbmcnO1xuaW1wb3J0ICcuLi9pbWFnZS9jYXRlZ29yeS1rb3JlYW4ucG5nJztcbmltcG9ydCAnLi4vaW1hZ2UvY2F0ZWdvcnktamFwYW5lc2UucG5nJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuY29uc3QgYXBwID0gbmV3IEFwcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpKTtcbmFwcC5pbml0UmVuZGVyKCk7XG5hcHAuYWRkRXZlbnRzKCk7XG4iLCJpbXBvcnQgeyBDQVRFR09SWV9JTUFHRV9VUkwgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IGJ1dHRvbiBmcm9tICcuLi9jb21tb24vYnV0dG9uJztcbmltcG9ydCBmYXZvcml0ZUljb24gZnJvbSAnLi4vY29tbW9uL2Zhdm9yaXRlSWNvbic7XG5jb25zdCBkZXRhaWwgPSAoeyByZXN0YXVyYW50IH0pID0+IHtcbiAgICBjb25zdCB7IGlkLCBjYXRlZ29yeSwgbmFtZSwgdGFrZU1pbnV0ZSwgZGVzY3JpcHRpb24sIGxpbmssIGZhdm9yaXRlIH0gPSByZXN0YXVyYW50O1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBkYXRhLWlkPVwiJHtpZH1cIiBjbGFzcz1cImRldGFpbFwiPlxuICAgICAgJHtmYXZvcml0ZUljb24oeyBpZCwgZmF2b3JpdGUgfSl9XG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudF9fY2F0ZWdvcnlcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke0NBVEVHT1JZX0lNQUdFX1VSTFtjYXRlZ29yeV0gPz8gJyd9XCIgYWx0PVwiJHtjYXRlZ29yeX1cIiBjbGFzcz1cImNhdGVnb3J5LWljb25cIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyIGNsYXNzPVwicmVzdGF1cmFudF9fbmFtZSB0ZXh0LXN1YnRpdGxlXCI+JHtuYW1lfTwvaDI+XG4gICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnRfX3Rha2UtbWludXRlIHRleHQtYm9keVwiPuy6oO2NvOyKpOu2gO2EsCAke3Rha2VNaW51dGV967aEIOuCtDwvcD5cbiAgICAgIDx0ZXh0YXJlYSByZWFkb25seT4ke2Rlc2NyaXB0aW9ufTwvdGV4dGFyZWE+XG4gICAgICA8ZGl2IGNsYXNzPVwibGluay1hcmVhXCI+XG4gICAgICAgIDxhIGhyZWY9XCIke2xpbmt9XCI+JHtsaW5rfTwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgJHtidXR0b24oeyBpZDogJ3JlbW92ZScsIHR5cGU6ICdidXR0b24nLCBzdHlsZTogJ3NlY29uZGFyeScsIGNvbnRlbnQ6ICfsgq3soJztlZjquLAnIH0pfVxuICAgICAgICAke2J1dHRvbih7IGlkOiAnY2xvc2UnLCB0eXBlOiAnYnV0dG9uJywgc3R5bGU6ICdwcmltYXJ5JywgY29udGVudDogJ+uLq+q4sCcgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcbn07XG5leHBvcnQgZGVmYXVsdCBkZXRhaWw7XG4iLCJpbXBvcnQgdGFiIGZyb20gJy4vdGFiJztcbmNvbnN0IHRhYkJhciA9ICh7IGNoZWNrZWRUeXBlIH0pID0+IHtcbiAgICBjb25zdCB0YWJQcm9wcyA9IFtcbiAgICAgICAgeyBpZDogJ2FsbCcsIGxhYmVsOiAn66qo65OgIOydjOyLneygkCcgfSxcbiAgICAgICAgeyBpZDogJ2Zhdm9yaXRlJywgbGFiZWw6ICfsnpDso7wg6rCA64qUIOydjOyLneygkCcgfSxcbiAgICBdO1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cInRhYi1iYXJcIj5cbiAgICAgICR7dGFiUHJvcHMubWFwKCh7IGlkLCBsYWJlbCB9KSA9PiB0YWIoeyBpZCwgbGFiZWwsIGNoZWNrZWQ6IGlkID09PSBjaGVja2VkVHlwZSB9KSkuam9pbignJyl9XG4gICAgPC9kaXY+XG4gIGA7XG59O1xuZXhwb3J0IGRlZmF1bHQgdGFiQmFyO1xuIiwiY29uc3QgdGFiID0gKHsgaWQsIGxhYmVsLCBjaGVja2VkIH0pID0+IHtcbiAgICByZXR1cm4gYFxuICAgIDxpbnB1dCBpZD0ke2lkfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwibGlzdFR5cGVcIiAke2NoZWNrZWQgPyAnY2hlY2tlZCcgOiAnJ30vPlxuICAgIDxsYWJlbCBjbGFzcz1cInRhYlwiIGZvcj1cIiR7aWR9XCI+JHtsYWJlbH08L2xhYmVsPlxuICBgO1xufTtcbmV4cG9ydCBkZWZhdWx0IHRhYjtcbiIsImltcG9ydCBzZWxlY3QgZnJvbSAnLi9jb21tb24vc2VsZWN0JztcbmNvbnN0IHJlc3RhdXJhbnRGaWx0ZXJDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnlPcHRpb25zID0gW1xuICAgICAgICB7IHZhbHVlOiAn7KCE7LK0JywgY29udGVudDogJ+yghOyytCcgfSxcbiAgICAgICAgeyB2YWx1ZTogJ+2VnOyLnScsIGNvbnRlbnQ6ICftlZzsi50nIH0sXG4gICAgICAgIHsgdmFsdWU6ICfspJHsi50nLCBjb250ZW50OiAn7KSR7IudJyB9LFxuICAgICAgICB7IHZhbHVlOiAn7J287IudJywgY29udGVudDogJ+ydvOyLnScgfSxcbiAgICAgICAgeyB2YWx1ZTogJ+yWkeyLnScsIGNvbnRlbnQ6ICfslpHsi50nIH0sXG4gICAgICAgIHsgdmFsdWU6ICfslYTsi5zslYgnLCBjb250ZW50OiAn7JWE7Iuc7JWIJyB9LFxuICAgICAgICB7IHZhbHVlOiAn6riw7YOAJywgY29udGVudDogJ+q4sO2DgCcgfSxcbiAgICBdO1xuICAgIGNvbnN0IHNvcnRpbmdPcHRpb25zID0gW1xuICAgICAgICB7IHZhbHVlOiAnbmFtZScsIGNvbnRlbnQ6ICfsnbTrpoTsiJwnIH0sXG4gICAgICAgIHsgdmFsdWU6ICd0YWtlTWludXRlJywgY29udGVudDogJ+qxsOumrOyInCcgfSxcbiAgICBdO1xuICAgIHJldHVybiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJyZXN0YXVyYW50LWZpbHRlci1jb250YWluZXJcIj5cbiAgICAgICR7c2VsZWN0KHsgaWQ6ICdjYXRlZ29yeS1maWx0ZXInLCBuYW1lOiAnY2F0ZWdvcnknLCBvcHRpb25zOiBjYXRlZ29yeU9wdGlvbnMgfSl9XG4gICAgICAke3NlbGVjdCh7IGlkOiAnc29ydGluZy1maWx0ZXInLCBuYW1lOiAnc29ydGluZycsIG9wdGlvbnM6IHNvcnRpbmdPcHRpb25zIH0pfVxuICAgIDwvc2VjdGlvbj5cbiAgYDtcbn07XG5leHBvcnQgZGVmYXVsdCByZXN0YXVyYW50RmlsdGVyQ29udGFpbmVyO1xuIl0sIm5hbWVzIjpbIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwicHVzaCIsIm1vZHVsZSIsImlkIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJ0aGlzIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsIl9rIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInN0eWxlc0luRE9NIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwib3B0aW9ucyIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4QnlJZGVudGlmaWVyIiwib2JqIiwiY3NzIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRFbGVtZW50U3R5bGUiLCJieUluZGV4Iiwic3BsaWNlIiwiYXBpIiwiZG9tQVBJIiwidXBkYXRlIiwibmV3T2JqIiwicmVtb3ZlIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsImluZGV4IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2kiLCJfaW5kZXgiLCJtZW1vIiwiaW5zZXJ0Iiwic3R5bGUiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJnZXRUYXJnZXQiLCJFcnJvciIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInN0eWxlRWxlbWVudCIsIm5vbmNlIiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0U3R5bGVFbGVtZW50Iiwic3R5bGVUYWdUcmFuc2Zvcm0iLCJhcHBseSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZVN0eWxlRWxlbWVudCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiZmlyc3RDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImciLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInJlcGxhY2UiLCJwIiwibmMiLCJDQVRFR09SWV9JTUFHRV9VUkwiLCJERUZBVUxUX1NPUlRJTkciLCJfUmVzdGF1cmFudHNfcmVzdGF1cmFudHMiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwicmVjZWl2ZXIiLCJzdGF0ZSIsImtpbmQiLCJmIiwiVHlwZUVycm9yIiwiaGFzIiwidmFsdWUiLCJXZWFrTWFwIiwiZmF2b3JpdGUiLCJyZXN0YXVyYW50cyIsInJlc3RhdXJhbnQiLCJjYXRlZ29yeSIsIm5hbWUiLCJ0YWtlTWludXRlIiwiZGVzY3JpcHRpb24iLCJyZXF1aXJlZCIsInR5cGUiLCIkIiwic2VsZWN0b3JzIiwiX0N1c3RvbVN0b3JhZ2Vfa2V5IiwiX0N1c3RvbVN0b3JhZ2VfZGVmYXVsdFZhbHVlIiwic2V0IiwiX0FwcF9yb290IiwiX0FwcF9zdG9yYWdlIiwiX0FwcF9tb2RlbCIsImFwcCIsImNvbnN0cnVjdG9yIiwicm9vdCIsImhhbmRsZUxpc3RJdGVtIiwiY2xvc2VzdCIsInVwZGF0ZUZhdm9yaXRlIiwiaW5pdE1vZGVsIiwicmVuZGVyTGlzdCIsInVwZGF0ZURldGFpbE1vZGFsIiwidG9nZ2xlRGV0YWlsTW9kYWwiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiZ2V0QWxsIiwiZmluZFJlc3RhdXJhbnQiLCJmaW5kIiwiZ2V0RmlsdGVyZWQiLCJzb3J0aW5nIiwic29ydCIsImZpbHRlciIsImdldEZhdm9yaXRlIiwic29ydFBpdm90IiwiTnVtYmVyIiwiYiIsImdldFZhbHVlIiwidG9nZ2xlRm9ybU1vZGFsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic3VibWl0Rm9ybSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsIkZvcm1EYXRhIiwiU3RyaW5nIiwiRGF0ZSIsIm5vdyIsImxpbmsiLCJzZXRWYWx1ZSIsImluaXRGb3JtIiwiaW5uZXJIVE1MIiwiJGNhdGVnb3J5RmlsdGVyIiwiJHNvcnRpbmdGaWx0ZXIiLCJzZWxlY3RlZEluZGV4Iiwib3V0ZXJIVE1MIiwidG9nZ2xlRmlsdGVyQ29udGFpbmVyIiwiZGF0YXNldCIsIm5ld1Jlc3RhdXJhbnRzIiwiJHBhcmVudCIsInJlbW92ZVJlc3RhdXJhbnQiLCJkZWZhdWx0VmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJzZXRJdGVtIiwiaW5pdFJlbmRlciIsImNoZWNrZWRUeXBlIiwibGFiZWwiLCJjaGVja2VkIiwiYWRkRXZlbnRzIiwiZXZlbnQiLCJhY3Rpb25zIiwiZm9yRWFjaCIsIm1hbnVhbCIsImFkZEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIiR0YXJnZXQiLCJjb250YWlucyIsImFjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=
