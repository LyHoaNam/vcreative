<template>
  <div>
    <p class="text-32-8-m mb-18">Các gói dịch vụ</p>
    <table class="tb-package">
      <thead>
        <tr class="tb-package-head">
          <th class="tb-package-th first" />
          <th class="tb-package-th">CƠ BẢN</th>
          <th class="tb-package-th">TIÊU CHUẨN</th>
          <th class="tb-package-th">NÂNG CAO</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tb-package-tr-first">
          <td class="tb-package-td mt-46">Các gói dịch vụ</td>
          <td class="tb-package-td">
            <p class="text-16-8-m">1 Option</p>
            <p class="mt-22 text-14-8">
              Thiết kế logo với 1 bản demo và chỉnh sửa không giới hạn
            </p>
          </td>
          <td class="tb-package-td">
            <p class="text-16-8-m">3 Option</p>
            <p class="mt-22 text-14-8">
              Thiết kế logo với 1 bản demo và chỉnh sửa không giới hạn
            </p>
          </td>
          <td class="tb-package-td">
            <p class="text-16-8-m">4 Option</p>
            <p class="mt-22 text-14-8">
              Thiết kế logo với 1 bản demo và chỉnh sửa không giới hạn
            </p>
          </td>
        </tr>
        <tr class="pb-24 pt-24">
          <td class="tb-package-td">Giao hàng</td>
          <td class="tb-package-td">
            <p class="text-16-8 text-center">1 Ngày</p>
          </td>
          <td class="tb-package-td">
            <div class="col-center">
              <eleChecked
                text="3 Ngày"
                name="giaohang-tieuchuan"
                value="3"
                class="tb-package-center"
              />
              <div class="mt-20 align-center mb-6">
                <eleChecked
                  text="2 Ngày"
                  name="giaohang-tieuchuan"
                  value="2"
                  class="mt-20 tb-package-center"
                />
              </div>
              <p class="text-16-7 tb-package-center">(+150.000)</p>
            </div>
          </td>
          <td class="tb-package-td">
            <div class="col-center">
              <eleChecked
                text="5 Ngày"
                name="giaohang-nangcao"
                value="3"
                class="tb-package-center"
              />
              <div class="mt-20 align-center mb-6">
                <eleChecked
                  text="7 Ngày"
                  name="giaohang-nangcao"
                  value="2"
                  class="mt-20 tb-package-center"
                />
              </div>
              <p class="text-16-7 tb-package-center">(+300.000)</p>
            </div>
          </td>
        </tr>
        <tr class="pb-24 pt-24">
          <td class="tb-package-td">Số lượng tùy chọn (Options)</td>
          <td class="tb-package-td">
            <div class="col-center">
              <eleChecked
                text="1"
                name="options-coban"
                value="1"
                class="tb-package-center"
              />
              <div class="mt-20 align-center mb-6">
                <eleChecked
                  text="2"
                  name="options-coban"
                  value="2"
                  class="mt-20 tb-package-center"
                />
              </div>
              <p class="text-16-7 tb-package-center">(+500.000)</p>
            </div>
          </td>
          <td class="tb-package-td">
            <div class="col-center">
              <eleChecked
                text="1"
                name="options-tieuchuan"
                value="1"
                class="tb-package-center"
              />
              <div class="mt-20 align-center mb-6">
                <eleChecked
                  text="2"
                  name="options-tieuchuan"
                  value="2"
                  class="mt-20 tb-package-center"
                />
              </div>
              <p class="text-16-7 tb-package-center">(+500.000)</p>
            </div>
          </td>
          <td class="tb-package-td">
            <div class="col-center">
              <eleChecked
                text="3"
                name="options-nangcao"
                value="4"
                class="tb-package-center"
              />
              <div class="mt-20 align-center mb-6">
                <eleChecked
                  text="4"
                  name="options-nangcao"
                  value="4"
                  class="mt-20 tb-package-center"
                />
              </div>
              <p class="text-16-7 tb-package-center">(+700.000)</p>
            </div>
          </td>
        </tr>
        <tr class="pb-24 pt-24">
          <td class="tb-package-td">File gốc</td>
          <td class="tb-package-td cell-center">
            <div class="ic-green-check ic-checked" />
          </td>
          <td class="tb-package-td cell-center">
            <div class="ic-green-check ic-checked" />
          </td>
          <td class="tb-package-td cell-center">
            <div class="ic-green-check ic-checked" />
          </td>
        </tr>
        <tr class="pb-24 pt-24">
          <td class="tb-package-td">Số lần chỉnh sửa</td>
          <td class="tb-package-td cell-center">3</td>
          <td class="tb-package-td cell-center">Không giới hạn</td>
          <td class="tb-package-td cell-center">Không giới hạn</td>
        </tr>
        <tr class="pb-24 pt-24">
          <td class="tb-package-td">Mockup/ Prototype</td>
          <td class="tb-package-td cell-center">
            <div class="ic-gray-check ic-checked" />
          </td>
          <td class="tb-package-td cell-center">
            <div class="ic-green-check ic-checked" />
          </td>
          <td class="tb-package-td cell-center">
            <div class="ic-green-check ic-checked" />
          </td>
        </tr>
        <tr class="pb-24 pt-24">
          <td class="tb-package-td">Giá</td>
          <td class="tb-package-td cell-center">
            <p class="mb-18">{{ (700000).toLocaleString('de-VI') }}VND</p>
            <button class="btn-primary tb-package-btn">Chọn</button>
          </td>
          <td class="tb-package-td cell-center">
            <p class="mb-18">{{ (1000000).toLocaleString('de-VI') }}VND</p>
            <button class="btn-primary tb-package-btn">Chọn</button>
          </td>
          <td class="tb-package-td cell-center">
            <p class="mb-18">{{ (3000000).toLocaleString('de-VI') }}VND</p>
            <button class="btn-primary tb-package-btn">Chọn</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
