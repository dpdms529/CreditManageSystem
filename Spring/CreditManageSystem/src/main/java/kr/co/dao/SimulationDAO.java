package kr.co.dao;

import java.util.List;

import kr.co.vo.CreditVO;
import kr.co.vo.CriteriaVO;
import kr.co.vo.OrderVO;

public interface SimulationDAO {
	//��������
	public List<CriteriaVO> criteria(int admissionYear) throws Exception;
	
	//�������
	public List<CreditVO> credit(String studentId) throws Exception;
	
	//�������
	public float gpa(String studentId) throws Exception;
	
	//���ļ�ü��
	public List<OrderVO> order(int year) throws Exception;
}
