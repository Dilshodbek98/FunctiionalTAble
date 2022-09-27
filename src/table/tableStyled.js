import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  .header {
    position: sticky;
    width: 100%;
    top: 0;
    background-color: #fff;
    padding: 20px 0;
  }
  .search-field {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    border: none;
    input[type="text"] {
      width: 1100px;
      height: 40px;
      align-items: center;
      padding-left: 30px;
      padding-right: 30px;
      font-size: 16px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      :focus {
        outline: none;
      }
    }
    .searh-icon {
      position: absolute;
      top: 12px;
      left: 10px;
    }
    .close-icon {
      position: absolute;
      top: 12px;
      right: 275px;
      cursor: pointer;
      :hover {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
      }
      :active {
        transform: scale(0.95);
      }
    }
    select {
      border-radius: 10px;
      padding: 0 10px;
      :focus {
        outline: none;
      }
    }
  }
  table {
    border-collapse: collapse;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    width: 100%;
  }
  tr {
    height: 60px;
  }
  th {
    padding: 16px;
  }
  tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  td {
    padding-left: 16px;
    height: 100%;
    width: fit-content;
    overflow: hidden;
  }
  .buttonss {
    display: flex;
    width: auto;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .item {
    display: flex;
    width: 100%;
    gap: 10px;
    height: 70px;
    align-items: center;
  }

  .add-user-box {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    .inputs {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      input {
        width: 400px;
        height: 40px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        display: flex;
        font-size: 16px;
        align-items: center;
        padding: 0 20px;
        :focus {
          outline: none;
        }
      }
    }
    .buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
  }
  .editeInput {
    width: fit-content;
    height: 40px;
    padding: 0 10px;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    :focus {
      outline: none;
    }
  }
  .age {
    width: 60px;
  }
`;

export const Btn = styled.button`
  display: flex;
  padding: 5px 20px;
  font-size: 18px;
  background-color: white;
  color: ${({ color }) => color};
  border-radius: 10px;
  width: fit-content;
  border-color: ${({ borderColor }) => borderColor};
  cursor: pointer;
  :hover {
    background-color: ${({ borderColor }) => borderColor};
    color: #fff;
  }
  :active{
    transform: scale(0.98);
  }


`;
